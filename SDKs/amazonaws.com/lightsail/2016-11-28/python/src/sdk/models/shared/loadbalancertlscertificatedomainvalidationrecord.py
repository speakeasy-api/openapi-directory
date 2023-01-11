import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loadbalancertlscertificatedomainstatus_enum as shared_loadbalancertlscertificatedomainstatus_enum


@dataclass_json
@dataclasses.dataclass
class LoadBalancerTLSCertificateDomainValidationRecord:
    r"""LoadBalancerTLSCertificateDomainValidationRecord
    Describes the validation record of each domain name in the SSL/TLS certificate.
    """
    
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    validation_status: Optional[shared_loadbalancertlscertificatedomainstatus_enum.LoadBalancerTLSCertificateDomainStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationStatus') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
