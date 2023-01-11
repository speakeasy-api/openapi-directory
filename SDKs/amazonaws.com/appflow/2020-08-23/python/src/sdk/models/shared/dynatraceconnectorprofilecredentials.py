import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DynatraceConnectorProfileCredentials:
    r"""DynatraceConnectorProfileCredentials
     The connector-specific profile credentials required by Dynatrace. 
    """
    
    api_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiToken') }})
    
