import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewayclienttlscertificate as shared_virtualgatewayclienttlscertificate
from ..shared import virtualgatewaytlsvalidationcontext as shared_virtualgatewaytlsvalidationcontext


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayClientPolicyTLS:
    r"""VirtualGatewayClientPolicyTLS
    An object that represents a Transport Layer Security (TLS) client policy.
    """
    
    validation: shared_virtualgatewaytlsvalidationcontext.VirtualGatewayTLSValidationContext = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    certificate: Optional[shared_virtualgatewayclienttlscertificate.VirtualGatewayClientTLSCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    enforce: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce') }})
    ports: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
