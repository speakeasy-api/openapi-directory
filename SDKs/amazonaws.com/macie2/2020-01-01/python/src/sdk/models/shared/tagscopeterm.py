import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobcomparator_enum as shared_jobcomparator_enum
from ..shared import tagvaluepair as shared_tagvaluepair
from ..shared import tagtarget_enum as shared_tagtarget_enum


@dataclass_json
@dataclasses.dataclass
class TagScopeTerm:
    r"""TagScopeTerm
    Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
    """
    
    comparator: Optional[shared_jobcomparator_enum.JobComparatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    tag_values: Optional[list[shared_tagvaluepair.TagValuePair]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagValues') }})
    target: Optional[shared_tagtarget_enum.TagTargetEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
