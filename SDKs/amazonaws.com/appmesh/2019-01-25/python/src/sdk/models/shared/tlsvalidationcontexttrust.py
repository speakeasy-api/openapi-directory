import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tlsvalidationcontextacmtrust as shared_tlsvalidationcontextacmtrust
from ..shared import tlsvalidationcontextfiletrust as shared_tlsvalidationcontextfiletrust
from ..shared import tlsvalidationcontextsdstrust as shared_tlsvalidationcontextsdstrust


@dataclass_json
@dataclasses.dataclass
class TLSValidationContextTrust:
    r"""TLSValidationContextTrust
    An object that represents a Transport Layer Security (TLS) validation context trust.
    """
    
    acm: Optional[shared_tlsvalidationcontextacmtrust.TLSValidationContextAcmTrust] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acm') }})
    file: Optional[shared_tlsvalidationcontextfiletrust.TLSValidationContextFileTrust] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[shared_tlsvalidationcontextsdstrust.TLSValidationContextSdsTrust] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
