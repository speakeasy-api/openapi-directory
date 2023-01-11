import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clienttlscertificate as shared_clienttlscertificate
from ..shared import tlsvalidationcontext as shared_tlsvalidationcontext


@dataclass_json
@dataclasses.dataclass
class ClientPolicyTLS:
    r"""ClientPolicyTLS
    A reference to an object that represents a Transport Layer Security (TLS) client policy.
    """
    
    validation: shared_tlsvalidationcontext.TLSValidationContext = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    certificate: Optional[shared_clienttlscertificate.ClientTLSCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    enforce: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce') }})
    ports: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
