import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import projectdetails as shared_projectdetails


@dataclass_json
@dataclasses.dataclass
class UpdateProjectResult:
    r"""UpdateProjectResult
     Result structure used for requests to updated project configuration. 
    """
    
    details: Optional[shared_projectdetails.ProjectDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
