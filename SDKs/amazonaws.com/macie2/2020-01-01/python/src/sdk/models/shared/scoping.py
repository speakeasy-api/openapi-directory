import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobscopingblock as shared_jobscopingblock


@dataclass_json
@dataclasses.dataclass
class Scoping:
    r"""Scoping
    Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.
    """
    
    excludes: Optional[shared_jobscopingblock.JobScopingBlock] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    includes: Optional[shared_jobscopingblock.JobScopingBlock] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    
