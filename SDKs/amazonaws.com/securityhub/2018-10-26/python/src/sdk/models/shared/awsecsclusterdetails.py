import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsecsclusterclustersettingsdetails as shared_awsecsclusterclustersettingsdetails
from ..shared import awsecsclusterconfigurationdetails as shared_awsecsclusterconfigurationdetails
from ..shared import awsecsclusterdefaultcapacityproviderstrategydetails as shared_awsecsclusterdefaultcapacityproviderstrategydetails


@dataclass_json
@dataclasses.dataclass
class AwsEcsClusterDetails:
    r"""AwsEcsClusterDetails
    provides details about an ECS cluster.
    """
    
    capacity_providers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityProviders') }})
    cluster_settings: Optional[list[shared_awsecsclusterclustersettingsdetails.AwsEcsClusterClusterSettingsDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterSettings') }})
    configuration: Optional[shared_awsecsclusterconfigurationdetails.AwsEcsClusterConfigurationDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    default_capacity_provider_strategy: Optional[list[shared_awsecsclusterdefaultcapacityproviderstrategydetails.AwsEcsClusterDefaultCapacityProviderStrategyDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultCapacityProviderStrategy') }})
    
