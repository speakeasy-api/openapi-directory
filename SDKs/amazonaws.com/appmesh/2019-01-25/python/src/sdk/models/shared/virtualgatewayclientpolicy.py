import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewayclientpolicytls as shared_virtualgatewayclientpolicytls


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayClientPolicy:
    r"""VirtualGatewayClientPolicy
    An object that represents a client policy.
    """
    
    tls: Optional[shared_virtualgatewayclientpolicytls.VirtualGatewayClientPolicyTLS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
