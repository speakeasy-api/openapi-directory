import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectdetails as shared_projectdetails


@dataclass_json
@dataclasses.dataclass
class DescribeProjectResult:
    r"""DescribeProjectResult
     Result structure used for requests of project details. 
    """
    
    details: Optional[shared_projectdetails.ProjectDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
