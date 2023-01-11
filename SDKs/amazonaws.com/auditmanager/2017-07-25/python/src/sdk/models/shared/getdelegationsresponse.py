import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import delegationmetadata as shared_delegationmetadata


@dataclass_json
@dataclasses.dataclass
class GetDelegationsResponse:
    delegations: Optional[list[shared_delegationmetadata.DelegationMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
