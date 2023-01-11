import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateAssessmentFrameworkControl:
    r"""CreateAssessmentFrameworkControl
     Control entity attributes that uniquely identify an existing control to be added to a framework in Audit Manager. 
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
