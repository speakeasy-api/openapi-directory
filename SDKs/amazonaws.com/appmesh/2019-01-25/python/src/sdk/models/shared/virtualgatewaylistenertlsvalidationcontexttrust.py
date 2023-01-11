import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaytlsvalidationcontextfiletrust as shared_virtualgatewaytlsvalidationcontextfiletrust
from ..shared import virtualgatewaytlsvalidationcontextsdstrust as shared_virtualgatewaytlsvalidationcontextsdstrust


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayListenerTLSValidationContextTrust:
    r"""VirtualGatewayListenerTLSValidationContextTrust
    An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
    """
    
    file: Optional[shared_virtualgatewaytlsvalidationcontextfiletrust.VirtualGatewayTLSValidationContextFileTrust] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[shared_virtualgatewaytlsvalidationcontextsdstrust.VirtualGatewayTLSValidationContextSdsTrust] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
