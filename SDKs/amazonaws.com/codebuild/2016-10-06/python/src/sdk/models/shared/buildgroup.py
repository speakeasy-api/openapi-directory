import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildsummary as shared_buildsummary


@dataclass_json
@dataclasses.dataclass
class BuildGroup:
    r"""BuildGroup
    Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
    """
    
    current_build_summary: Optional[shared_buildsummary.BuildSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentBuildSummary') }})
    depends_on: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependsOn') }})
    identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    ignore_failure: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreFailure') }})
    prior_build_summary_list: Optional[list[shared_buildsummary.BuildSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priorBuildSummaryList') }})
    
