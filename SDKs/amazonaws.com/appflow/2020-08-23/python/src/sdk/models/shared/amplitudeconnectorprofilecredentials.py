import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AmplitudeConnectorProfileCredentials:
    r"""AmplitudeConnectorProfileCredentials
     The connector-specific credentials required when using Amplitude. 
    """
    
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    secret_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKey') }})
    
