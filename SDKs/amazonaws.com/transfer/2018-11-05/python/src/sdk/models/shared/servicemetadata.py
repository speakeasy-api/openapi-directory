import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userdetails as shared_userdetails


@dataclass_json
@dataclasses.dataclass
class ServiceMetadata:
    r"""ServiceMetadata
    A container object for the session details associated with a workflow.
    """
    
    user_details: shared_userdetails.UserDetails = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDetails') }})
    
