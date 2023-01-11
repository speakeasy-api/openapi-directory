import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
    A secret to pass to the log configuration.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    value_from: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueFrom') }})
    
