import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loadbalancertlscertificate as shared_loadbalancertlscertificate


@dataclass_json
@dataclasses.dataclass
class GetLoadBalancerTLSCertificatesResult:
    tls_certificates: Optional[list[shared_loadbalancertlscertificate.LoadBalancerTLSCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsCertificates') }})
    
