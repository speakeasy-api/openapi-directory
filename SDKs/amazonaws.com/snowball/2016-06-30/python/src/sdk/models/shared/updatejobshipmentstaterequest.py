import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shipmentstate_enum as shared_shipmentstate_enum


@dataclass_json
@dataclasses.dataclass
class UpdateJobShipmentStateRequest:
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    shipment_state: shared_shipmentstate_enum.ShipmentStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShipmentState') }})
    
