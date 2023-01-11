import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awscertificatemanagercertificatedomainvalidationoption as shared_awscertificatemanagercertificatedomainvalidationoption
from ..shared import awscertificatemanagercertificateextendedkeyusage as shared_awscertificatemanagercertificateextendedkeyusage
from ..shared import awscertificatemanagercertificatekeyusage as shared_awscertificatemanagercertificatekeyusage
from ..shared import awscertificatemanagercertificateoptions as shared_awscertificatemanagercertificateoptions
from ..shared import awscertificatemanagercertificaterenewalsummary as shared_awscertificatemanagercertificaterenewalsummary


@dataclass_json
@dataclasses.dataclass
class AwsCertificateManagerCertificateDetails:
    r"""AwsCertificateManagerCertificateDetails
    Provides details about an Certificate Manager certificate.
    """
    
    certificate_authority_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    domain_validation_options: Optional[list[shared_awscertificatemanagercertificatedomainvalidationoption.AwsCertificateManagerCertificateDomainValidationOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    extended_key_usages: Optional[list[shared_awscertificatemanagercertificateextendedkeyusage.AwsCertificateManagerCertificateExtendedKeyUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsages') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    imported_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportedAt') }})
    in_use_by: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InUseBy') }})
    issued_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedAt') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    key_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyAlgorithm') }})
    key_usages: Optional[list[shared_awscertificatemanagercertificatekeyusage.AwsCertificateManagerCertificateKeyUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsages') }})
    not_after: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotAfter') }})
    not_before: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotBefore') }})
    options: Optional[shared_awscertificatemanagercertificateoptions.AwsCertificateManagerCertificateOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    renewal_eligibility: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalEligibility') }})
    renewal_summary: Optional[shared_awscertificatemanagercertificaterenewalsummary.AwsCertificateManagerCertificateRenewalSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalSummary') }})
    serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Serial') }})
    signature_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignatureAlgorithm') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    subject_alternative_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectAlternativeNames') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
