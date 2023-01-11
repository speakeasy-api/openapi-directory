import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userimportjobtype as shared_userimportjobtype


@dataclass_json
@dataclasses.dataclass
class CreateUserImportJobResponse:
    r"""CreateUserImportJobResponse
    Represents the response from the server to the request to create the user import job.
    """
    
    user_import_job: Optional[shared_userimportjobtype.UserImportJobType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserImportJob') }})
    
