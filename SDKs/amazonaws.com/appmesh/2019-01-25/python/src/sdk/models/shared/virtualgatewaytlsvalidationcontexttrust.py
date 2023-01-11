import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaytlsvalidationcontextacmtrust as shared_virtualgatewaytlsvalidationcontextacmtrust
from ..shared import virtualgatewaytlsvalidationcontextfiletrust as shared_virtualgatewaytlsvalidationcontextfiletrust
from ..shared import virtualgatewaytlsvalidationcontextsdstrust as shared_virtualgatewaytlsvalidationcontextsdstrust


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayTLSValidationContextTrust:
    r"""VirtualGatewayTLSValidationContextTrust
    An object that represents a Transport Layer Security (TLS) validation context trust.
    """
    
    acm: Optional[shared_virtualgatewaytlsvalidationcontextacmtrust.VirtualGatewayTLSValidationContextAcmTrust] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acm') }})
    file: Optional[shared_virtualgatewaytlsvalidationcontextfiletrust.VirtualGatewayTLSValidationContextFileTrust] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[shared_virtualgatewaytlsvalidationcontextsdstrust.VirtualGatewayTLSValidationContextSdsTrust] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
