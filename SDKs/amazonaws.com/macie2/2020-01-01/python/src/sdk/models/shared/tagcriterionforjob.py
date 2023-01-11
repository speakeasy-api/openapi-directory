import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobcomparator_enum as shared_jobcomparator_enum
from ..shared import tagcriterionpairforjob as shared_tagcriterionpairforjob


@dataclass_json
@dataclasses.dataclass
class TagCriterionForJob:
    r"""TagCriterionForJob
    Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.
    """
    
    comparator: Optional[shared_jobcomparator_enum.JobComparatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    tag_values: Optional[list[shared_tagcriterionpairforjob.TagCriterionPairForJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValues') }})
    
