import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domainvalidation as shared_domainvalidation
from ..shared import extendedkeyusage as shared_extendedkeyusage
from ..shared import failurereason_enum as shared_failurereason_enum
from ..shared import keyalgorithm_enum as shared_keyalgorithm_enum
from ..shared import keyusage as shared_keyusage
from ..shared import certificateoptions as shared_certificateoptions
from ..shared import renewaleligibility_enum as shared_renewaleligibility_enum
from ..shared import renewalsummary as shared_renewalsummary
from ..shared import revocationreason_enum as shared_revocationreason_enum
from ..shared import certificatestatus_enum as shared_certificatestatus_enum
from ..shared import certificatetype_enum as shared_certificatetype_enum


@dataclass_json
@dataclasses.dataclass
class CertificateDetail:
    r"""CertificateDetail
    Contains metadata about an ACM certificate. This structure is returned in the response to a <a>DescribeCertificate</a> request. 
    """
    
    certificate_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    certificate_authority_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    domain_validation_options: Optional[list[shared_domainvalidation.DomainValidation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainValidationOptions') }})
    extended_key_usages: Optional[list[shared_extendedkeyusage.ExtendedKeyUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExtendedKeyUsages') }})
    failure_reason: Optional[shared_failurereason_enum.FailureReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    imported_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    in_use_by: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InUseBy') }})
    issued_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    key_algorithm: Optional[shared_keyalgorithm_enum.KeyAlgorithmEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyAlgorithm') }})
    key_usages: Optional[list[shared_keyusage.KeyUsage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyUsages') }})
    not_after: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotAfter'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    not_before: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotBefore'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    options: Optional[shared_certificateoptions.CertificateOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Options') }})
    renewal_eligibility: Optional[shared_renewaleligibility_enum.RenewalEligibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalEligibility') }})
    renewal_summary: Optional[shared_renewalsummary.RenewalSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RenewalSummary') }})
    revocation_reason: Optional[shared_revocationreason_enum.RevocationReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevocationReason') }})
    revoked_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevokedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Serial') }})
    signature_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SignatureAlgorithm') }})
    status: Optional[shared_certificatestatus_enum.CertificateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subject') }})
    subject_alternative_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubjectAlternativeNames') }})
    type: Optional[shared_certificatetype_enum.CertificateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
