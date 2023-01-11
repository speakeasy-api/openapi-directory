import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobcomparator_enum as shared_jobcomparator_enum
from ..shared import listjobsfilterkey_enum as shared_listjobsfilterkey_enum


@dataclass_json
@dataclasses.dataclass
class ListJobsFilterTerm:
    r"""ListJobsFilterTerm
    Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
    """
    
    comparator: Optional[shared_jobcomparator_enum.JobComparatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[shared_listjobsfilterkey_enum.ListJobsFilterKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
