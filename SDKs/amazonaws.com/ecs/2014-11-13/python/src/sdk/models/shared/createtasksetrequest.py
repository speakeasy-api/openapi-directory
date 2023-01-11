import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capacityproviderstrategyitem as shared_capacityproviderstrategyitem
from ..shared import launchtype_enum as shared_launchtype_enum
from ..shared import loadbalancer as shared_loadbalancer
from ..shared import networkconfiguration as shared_networkconfiguration
from ..shared import scale as shared_scale
from ..shared import serviceregistry as shared_serviceregistry
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateTaskSetRequest:
    cluster: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    service: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    task_definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    capacity_provider_strategy: Optional[list[shared_capacityproviderstrategyitem.CapacityProviderStrategyItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviderStrategy') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    launch_type: Optional[shared_launchtype_enum.LaunchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchType') }})
    load_balancers: Optional[list[shared_loadbalancer.LoadBalancer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadBalancers') }})
    network_configuration: Optional[shared_networkconfiguration.NetworkConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    platform_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformVersion') }})
    scale: Optional[shared_scale.Scale] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    service_registries: Optional[list[shared_serviceregistry.ServiceRegistry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRegistries') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
