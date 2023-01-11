import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simplecriterionforjob as shared_simplecriterionforjob
from ..shared import tagcriterionforjob as shared_tagcriterionforjob


@dataclass_json
@dataclasses.dataclass
class CriteriaForJob:
    r"""CriteriaForJob
    Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.
    """
    
    simple_criterion: Optional[shared_simplecriterionforjob.SimpleCriterionForJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleCriterion') }})
    tag_criterion: Optional[shared_tagcriterionforjob.TagCriterionForJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagCriterion') }})
    
