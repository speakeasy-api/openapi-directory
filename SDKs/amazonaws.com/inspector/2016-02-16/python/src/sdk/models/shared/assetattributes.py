import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import networkinterface as shared_networkinterface
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class AssetAttributes:
    r"""AssetAttributes
    A collection of attributes of the host from which the finding is generated.
    """
    
    schema_version: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    agent_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    ami_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amiId') }})
    auto_scaling_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroup') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    ipv4_addresses: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Addresses') }})
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
