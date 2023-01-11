import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecstaskdefinitioncontainerdefinitionslogconfigurationsecretoptionsdetails as shared_awsecstaskdefinitioncontainerdefinitionslogconfigurationsecretoptionsdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails:
    r"""AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails
    The log configuration specification for the container.
    """
    
    log_driver: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogDriver') }})
    options: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    secret_options: Optional[list[shared_awsecstaskdefinitioncontainerdefinitionslogconfigurationsecretoptionsdetails.AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretOptions') }})
    
