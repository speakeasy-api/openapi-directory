import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterconfiguration as shared_clusterconfiguration
from ..shared import capacityproviderstrategyitem as shared_capacityproviderstrategyitem
from ..shared import clustersetting as shared_clustersetting
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateClusterRequest:
    capacity_providers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviders') }})
    cluster_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    configuration: Optional[shared_clusterconfiguration.ClusterConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configuration') }})
    default_capacity_provider_strategy: Optional[list[shared_capacityproviderstrategyitem.CapacityProviderStrategyItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCapacityProviderStrategy') }})
    settings: Optional[list[shared_clustersetting.ClusterSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
