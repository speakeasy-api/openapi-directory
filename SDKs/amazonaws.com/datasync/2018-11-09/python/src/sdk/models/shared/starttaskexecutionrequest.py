import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterrule as shared_filterrule
from ..shared import options as shared_options


@dataclass_json
@dataclasses.dataclass
class StartTaskExecutionRequest:
    r"""StartTaskExecutionRequest
    StartTaskExecutionRequest
    """
    
    task_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskArn') }})
    excludes: Optional[list[shared_filterrule.FilterRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Excludes') }})
    includes: Optional[list[shared_filterrule.FilterRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    override_options: Optional[shared_options.Options] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverrideOptions') }})
    
