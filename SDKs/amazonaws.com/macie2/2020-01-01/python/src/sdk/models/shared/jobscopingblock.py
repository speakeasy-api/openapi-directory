import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobscopeterm as shared_jobscopeterm


@dataclass_json
@dataclasses.dataclass
class JobScopingBlock:
    r"""JobScopingBlock
    Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.
    """
    
    and_: Optional[list[shared_jobscopeterm.JobScopeTerm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('and') }})
    
