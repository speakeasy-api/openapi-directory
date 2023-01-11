import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suppressionlistreason_enum as shared_suppressionlistreason_enum


@dataclass_json
@dataclasses.dataclass
class SuppressedDestinationSummary:
    r"""SuppressedDestinationSummary
    A summary that describes the suppressed email address.
    """
    
    email_address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailAddress') }})
    last_update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: shared_suppressionlistreason_enum.SuppressionListReasonEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    
