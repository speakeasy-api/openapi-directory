import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayListenerTLSAcmCertificate:
    r"""VirtualGatewayListenerTLSAcmCertificate
    An object that represents an Certificate Manager certificate.
    """
    
    certificate_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateArn') }})
    
