import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessdirection_enum as shared_accessdirection_enum
from ..shared import portaccesstype_enum as shared_portaccesstype_enum
from ..shared import networkprotocol_enum as shared_networkprotocol_enum


@dataclass_json
@dataclasses.dataclass
class InstancePortInfo:
    r"""InstancePortInfo
    Describes information about ports for an Amazon Lightsail instance.
    """
    
    access_direction: Optional[shared_accessdirection_enum.AccessDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessDirection') }})
    access_from: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessFrom') }})
    access_type: Optional[shared_portaccesstype_enum.PortAccessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessType') }})
    cidr_list_aliases: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrListAliases') }})
    cidrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrs') }})
    common_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonName') }})
    from_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromPort') }})
    ipv6_cidrs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6Cidrs') }})
    protocol: Optional[shared_networkprotocol_enum.NetworkProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    to_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toPort') }})
    
