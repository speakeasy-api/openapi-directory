import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscertificatemanagercertificatedomainvalidationoption as shared_awscertificatemanagercertificatedomainvalidationoption


@dataclass_json
@dataclasses.dataclass
class AwsCertificateManagerCertificateRenewalSummary:
    r"""AwsCertificateManagerCertificateRenewalSummary
    Contains information about the Certificate Manager managed renewal for an <code>AMAZON_ISSUED</code> certificate.
    """
    
    domain_validation_options: Optional[list[shared_awscertificatemanagercertificatedomainvalidationoption.AwsCertificateManagerCertificateDomainValidationOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    renewal_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalStatus') }})
    renewal_status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalStatusReason') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    
