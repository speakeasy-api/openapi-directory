import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createassessmentframeworkcontrol as shared_createassessmentframeworkcontrol


@dataclass_json
@dataclasses.dataclass
class CreateAssessmentFrameworkControlSet:
    r"""CreateAssessmentFrameworkControlSet
     A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID. 
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    controls: Optional[list[shared_createassessmentframeworkcontrol.CreateAssessmentFrameworkControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controls') }})
    
