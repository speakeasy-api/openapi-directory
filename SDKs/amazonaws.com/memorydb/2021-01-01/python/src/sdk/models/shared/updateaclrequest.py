import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateACLRequest:
    acl_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACLName') }})
    user_names_to_add: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserNamesToAdd') }})
    user_names_to_remove: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserNamesToRemove') }})
    
