import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum(str, Enum):
    DROPLET = "droplet"
    K8S = "k8s"
    IP_ADDR = "ip_addr"
    TAG = "tag"
    APP = "app"


@dataclass_json
@dataclasses.dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput:
    type: Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    cluster_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster_uuid') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    
