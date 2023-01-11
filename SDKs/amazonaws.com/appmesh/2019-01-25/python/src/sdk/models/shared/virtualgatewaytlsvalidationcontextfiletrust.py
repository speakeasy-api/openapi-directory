import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayTLSValidationContextFileTrust:
    r"""VirtualGatewayTLSValidationContextFileTrust
    An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
    """
    
    certificate_chain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateChain') }})
    
