import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BasicAuthCredentials:
    r"""BasicAuthCredentials
     The basic auth credentials required for basic authentication. 
    """
    
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
