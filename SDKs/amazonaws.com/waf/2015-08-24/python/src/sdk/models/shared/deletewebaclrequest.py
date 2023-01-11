import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteWebACLRequest:
    change_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeToken') }})
    web_acl_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebACLId') }})
    
