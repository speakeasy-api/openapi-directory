import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectdetails as shared_projectdetails


@dataclass_json
@dataclasses.dataclass
class CreateProjectResult:
    r"""CreateProjectResult
     Result structure used in response to a request to create a project. 
    """
    
    details: Optional[shared_projectdetails.ProjectDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
