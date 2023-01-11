import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobcomparator_enum as shared_jobcomparator_enum
from ..shared import simplecriterionkeyforjob_enum as shared_simplecriterionkeyforjob_enum


@dataclass_json
@dataclasses.dataclass
class SimpleCriterionForJob:
    r"""SimpleCriterionForJob
    Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.
    """
    
    comparator: Optional[shared_jobcomparator_enum.JobComparatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[shared_simplecriterionkeyforjob_enum.SimpleCriterionKeyForJobEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
