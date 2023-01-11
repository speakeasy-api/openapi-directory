import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum(str, Enum):
    ANY = "any"
    MONDAY = "monday"
    TUESDAY = "tuesday"
    WEDNESDAY = "wednesday"
    THURSDAY = "thursday"
    FRIDAY = "friday"
    SATURDAY = "saturday"
    SUNDAY = "sunday"


@dataclass_json
@dataclasses.dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyInput:
    r"""Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyInput
    An object specifying the maintenance window policy for the Kubernetes cluster.
    """
    
    day: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyDayEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum(str, Enum):
    NO_SCHEDULE = "NoSchedule"
    PREFER_NO_SCHEDULE = "PreferNoSchedule"
    NO_EXECUTE = "NoExecute"


@dataclass_json
@dataclasses.dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints:
    effect: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaintsEffectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    auto_scale: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_scale') }})
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_nodes') }})
    min_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_nodes') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    taints: Optional[list[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsTaints]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsInput:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_pools: list[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsNodePoolsInput] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_pools') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    auto_upgrade: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_upgrade') }})
    maintenance_policy: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsMaintenancePolicyInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenance_policy') }})
    surge_upgrade: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surge_upgrade') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vpc_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc_uuid') }})
    
