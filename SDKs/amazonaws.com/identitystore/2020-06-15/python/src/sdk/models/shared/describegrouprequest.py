import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeGroupRequest:
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    identity_store_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityStoreId') }})
    
