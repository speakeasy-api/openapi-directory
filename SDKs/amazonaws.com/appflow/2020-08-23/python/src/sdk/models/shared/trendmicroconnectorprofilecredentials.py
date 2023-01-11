import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrendmicroConnectorProfileCredentials:
    r"""TrendmicroConnectorProfileCredentials
     The connector-specific profile credentials required when using Trend Micro. 
    """
    
    api_secret_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSecretKey') }})
    
