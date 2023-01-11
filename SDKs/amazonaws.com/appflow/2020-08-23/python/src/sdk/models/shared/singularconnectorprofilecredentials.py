import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SingularConnectorProfileCredentials:
    r"""SingularConnectorProfileCredentials
     The connector-specific profile credentials required when using Singular. 
    """
    
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    
