import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class AllocateHostedConnectionRequest:
    bandwidth: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    connection_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionId') }})
    connection_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionName') }})
    owner_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    vlan: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
