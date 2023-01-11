import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loadbalancertlscertificatedomainstatus_enum as shared_loadbalancertlscertificatedomainstatus_enum


@dataclass_json
@dataclasses.dataclass
class LoadBalancerTLSCertificateDomainValidationOption:
    r"""LoadBalancerTLSCertificateDomainValidationOption
    Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.
    """
    
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    validation_status: Optional[shared_loadbalancertlscertificatedomainstatus_enum.LoadBalancerTLSCertificateDomainStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationStatus') }})
    
