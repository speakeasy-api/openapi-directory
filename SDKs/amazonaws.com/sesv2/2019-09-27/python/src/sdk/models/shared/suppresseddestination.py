import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suppresseddestinationattributes as shared_suppresseddestinationattributes
from ..shared import suppressionlistreason_enum as shared_suppressionlistreason_enum


@dataclass_json
@dataclasses.dataclass
class SuppressedDestination:
    r"""SuppressedDestination
    An object that contains information about an email address that is on the suppression list for your account.
    """
    
    email_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    last_update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: shared_suppressionlistreason_enum.SuppressionListReasonEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    attributes: Optional[shared_suppresseddestinationattributes.SuppressedDestinationAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    
