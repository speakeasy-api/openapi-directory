import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelprotocol_enum as shared_channelprotocol_enum


@dataclass_json
@dataclasses.dataclass
class ResourceEndpointListItem:
    r"""ResourceEndpointListItem
    An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.
    """
    
    protocol: Optional[shared_channelprotocol_enum.ChannelProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    resource_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceEndpoint') }})
    
