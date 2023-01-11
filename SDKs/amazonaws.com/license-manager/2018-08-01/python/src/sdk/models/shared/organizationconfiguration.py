import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OrganizationConfiguration:
    r"""OrganizationConfiguration
    Configuration information for AWS Organizations.
    """
    
    enable_integration: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableIntegration') }})
    
