import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchrestrictions as shared_batchrestrictions


@dataclass_json
@dataclasses.dataclass
class ProjectBuildBatchConfig:
    r"""ProjectBuildBatchConfig
    Contains configuration information about a batch build project.
    """
    
    combine_artifacts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combineArtifacts') }})
    restrictions: Optional[shared_batchrestrictions.BatchRestrictions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    service_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    timeout_in_mins: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMins') }})
    
