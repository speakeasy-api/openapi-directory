import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ServiceNowConnectorProfileProperties:
    r"""ServiceNowConnectorProfileProperties
     The connector-specific profile properties required when using ServiceNow. 
    """
    
    instance_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceUrl') }})
    
