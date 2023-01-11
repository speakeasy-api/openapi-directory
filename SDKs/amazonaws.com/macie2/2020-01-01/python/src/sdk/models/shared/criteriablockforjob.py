import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criteriaforjob as shared_criteriaforjob


@dataclass_json
@dataclasses.dataclass
class CriteriaBlockForJob:
    r"""CriteriaBlockForJob
    Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.
    """
    
    and_: Optional[list[shared_criteriaforjob.CriteriaForJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('and') }})
    
