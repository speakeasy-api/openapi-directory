import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acl as shared_acl


@dataclass_json
@dataclasses.dataclass
class UpdateACLResponse:
    acl: Optional[shared_acl.ACL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACL') }})
    
