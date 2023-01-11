import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ZendeskConnectorProfileProperties:
    r"""ZendeskConnectorProfileProperties
     The connector-specific profile properties required when using Zendesk. 
    """
    
    instance_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceUrl') }})
    
