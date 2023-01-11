import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceidentifier as shared_resourceidentifier


@dataclass_json
@dataclasses.dataclass
class AuditSuppression:
    r"""AuditSuppression
     Filters out specific findings of a Device Defender audit. 
    """
    
    check_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkName') }})
    resource_identifier: shared_resourceidentifier.ResourceIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIdentifier') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expiration_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    suppress_indefinitely: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressIndefinitely') }})
    
