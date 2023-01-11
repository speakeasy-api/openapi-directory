import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import arrayjobdependency_enum as shared_arrayjobdependency_enum


@dataclass_json
@dataclasses.dataclass
class JobDependency:
    r"""JobDependency
    An object representing an Batch job dependency.
    """
    
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    type: Optional[shared_arrayjobdependency_enum.ArrayJobDependencyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
