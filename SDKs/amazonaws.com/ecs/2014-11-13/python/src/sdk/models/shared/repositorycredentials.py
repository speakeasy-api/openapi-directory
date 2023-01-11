import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RepositoryCredentials:
    r"""RepositoryCredentials
    The repository credentials for private registry authentication.
    """
    
    credentials_parameter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsParameter') }})
    
