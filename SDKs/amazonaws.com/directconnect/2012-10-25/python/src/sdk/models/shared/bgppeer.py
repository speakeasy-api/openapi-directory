import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressfamily_enum as shared_addressfamily_enum
from ..shared import bgppeerstate_enum as shared_bgppeerstate_enum
from ..shared import bgpstatus_enum as shared_bgpstatus_enum


@dataclass_json
@dataclasses.dataclass
class BgpPeer:
    r"""BgpPeer
    Information about a BGP peer.
    """
    
    address_family: Optional[shared_addressfamily_enum.AddressFamilyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressFamily') }})
    amazon_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonAddress') }})
    asn: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    auth_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authKey') }})
    aws_device_v2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDeviceV2') }})
    aws_logical_device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsLogicalDeviceId') }})
    bgp_peer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpPeerId') }})
    bgp_peer_state: Optional[shared_bgppeerstate_enum.BgpPeerStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpPeerState') }})
    bgp_status: Optional[shared_bgpstatus_enum.BgpStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpStatus') }})
    customer_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAddress') }})
    
