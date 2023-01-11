import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputstatus_enum as shared_inputstatus_enum


@dataclass_json
@dataclasses.dataclass
class InputConfiguration:
    r"""InputConfiguration
    Information about the configuration of an input.
    """
    
    creation_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputArn') }})
    input_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputName') }})
    last_update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: shared_inputstatus_enum.InputStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    input_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDescription') }})
    
