import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails
    The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
    """
    
    add: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Add') }})
    drop: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Drop') }})
    
