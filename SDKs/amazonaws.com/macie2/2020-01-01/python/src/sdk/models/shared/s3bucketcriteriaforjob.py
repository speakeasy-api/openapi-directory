import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criteriablockforjob as shared_criteriablockforjob


@dataclass_json
@dataclasses.dataclass
class S3BucketCriteriaForJob:
    r"""S3BucketCriteriaForJob
    Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.
    """
    
    excludes: Optional[shared_criteriablockforjob.CriteriaBlockForJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    includes: Optional[shared_criteriablockforjob.CriteriaBlockForJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    
