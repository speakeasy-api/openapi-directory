import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum(str, Enum):
    NO_SCHEDULE = "NoSchedule"
    PREFER_NO_SCHEDULE = "PreferNoSchedule"
    NO_EXECUTE = "NoExecute"


@dataclass_json
@dataclasses.dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints:
    effect: Optional[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsInput:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    auto_scale: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_scale') }})
    labels: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_nodes') }})
    min_nodes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_nodes') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    taints: Optional[list[Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taints') }})
    
