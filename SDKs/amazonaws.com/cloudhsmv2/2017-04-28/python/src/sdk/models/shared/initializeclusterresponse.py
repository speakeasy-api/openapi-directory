import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterstate_enum as shared_clusterstate_enum


@dataclass_json
@dataclasses.dataclass
class InitializeClusterResponse:
    state: Optional[shared_clusterstate_enum.ClusterStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateMessage') }})
    
