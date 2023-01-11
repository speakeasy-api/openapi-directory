import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewayconnectionpool as shared_virtualgatewayconnectionpool
from ..shared import virtualgatewayhealthcheckpolicy as shared_virtualgatewayhealthcheckpolicy
from ..shared import virtualgatewayportmapping as shared_virtualgatewayportmapping
from ..shared import virtualgatewaylistenertls as shared_virtualgatewaylistenertls


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayListener:
    r"""VirtualGatewayListener
    An object that represents a listener for a virtual gateway.
    """
    
    port_mapping: shared_virtualgatewayportmapping.VirtualGatewayPortMapping = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portMapping') }})
    connection_pool: Optional[shared_virtualgatewayconnectionpool.VirtualGatewayConnectionPool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionPool') }})
    health_check: Optional[shared_virtualgatewayhealthcheckpolicy.VirtualGatewayHealthCheckPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    tls: Optional[shared_virtualgatewaylistenertls.VirtualGatewayListenerTLS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls') }})
    
