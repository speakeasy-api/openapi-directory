import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecstaskdefinitionproxyconfigurationproxyconfigurationpropertiesdetails as shared_awsecstaskdefinitionproxyconfigurationproxyconfigurationpropertiesdetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsTaskDefinitionProxyConfigurationDetails:
    r"""AwsEcsTaskDefinitionProxyConfigurationDetails
    The configuration details for the App Mesh proxy.
    """
    
    container_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerName') }})
    proxy_configuration_properties: Optional[list[shared_awsecstaskdefinitionproxyconfigurationproxyconfigurationpropertiesdetails.AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProxyConfigurationProperties') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
