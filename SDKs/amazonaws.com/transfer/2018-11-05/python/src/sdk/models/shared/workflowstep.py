import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import copystepdetails as shared_copystepdetails
from ..shared import customstepdetails as shared_customstepdetails
from ..shared import deletestepdetails as shared_deletestepdetails
from ..shared import tagstepdetails as shared_tagstepdetails
from ..shared import workflowsteptype_enum as shared_workflowsteptype_enum


@dataclass_json
@dataclasses.dataclass
class WorkflowStep:
    r"""WorkflowStep
    The basic building block of a workflow.
    """
    
    copy_step_details: Optional[shared_copystepdetails.CopyStepDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyStepDetails') }})
    custom_step_details: Optional[shared_customstepdetails.CustomStepDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomStepDetails') }})
    delete_step_details: Optional[shared_deletestepdetails.DeleteStepDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteStepDetails') }})
    tag_step_details: Optional[shared_tagstepdetails.TagStepDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagStepDetails') }})
    type: Optional[shared_workflowsteptype_enum.WorkflowStepTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
