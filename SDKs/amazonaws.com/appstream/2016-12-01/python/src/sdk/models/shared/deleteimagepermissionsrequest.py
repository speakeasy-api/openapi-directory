import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteImagePermissionsRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    shared_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedAccountId') }})
    
