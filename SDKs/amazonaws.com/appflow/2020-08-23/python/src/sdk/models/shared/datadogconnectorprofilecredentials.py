import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DatadogConnectorProfileCredentials:
    r"""DatadogConnectorProfileCredentials
     The connector-specific credentials required by Datadog. 
    """
    
    api_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    application_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationKey') }})
    
