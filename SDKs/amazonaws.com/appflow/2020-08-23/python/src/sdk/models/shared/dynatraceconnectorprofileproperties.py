import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DynatraceConnectorProfileProperties:
    r"""DynatraceConnectorProfileProperties
     The connector-specific profile properties required by Dynatrace. 
    """
    
    instance_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceUrl') }})
    
