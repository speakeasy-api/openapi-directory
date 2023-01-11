import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import neighborconnectiondetail as shared_neighborconnectiondetail


@dataclass_json
@dataclasses.dataclass
class ListServerNeighborsResponse:
    neighbors: list[shared_neighborconnectiondetail.NeighborConnectionDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('neighbors') }})
    known_dependency_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownDependencyCount') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
