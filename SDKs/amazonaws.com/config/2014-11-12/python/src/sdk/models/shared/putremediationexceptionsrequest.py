import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationexceptionresourcekey as shared_remediationexceptionresourcekey


@dataclass_json
@dataclasses.dataclass
class PutRemediationExceptionsRequest:
    config_rule_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    resource_keys: list[shared_remediationexceptionresourcekey.RemediationExceptionResourceKey] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKeys') }})
    expiration_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
