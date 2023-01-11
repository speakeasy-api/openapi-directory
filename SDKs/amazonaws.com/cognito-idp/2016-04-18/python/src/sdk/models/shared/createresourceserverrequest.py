import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceserverscopetype as shared_resourceserverscopetype


@dataclass_json
@dataclasses.dataclass
class CreateResourceServerRequest:
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    scopes: Optional[list[shared_resourceserverscopetype.ResourceServerScopeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Scopes') }})
    
