import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditreportresponseformat_enum as shared_auditreportresponseformat_enum


@dataclass_json
@dataclasses.dataclass
class CreateCertificateAuthorityAuditReportRequest:
    audit_report_response_format: shared_auditreportresponseformat_enum.AuditReportResponseFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuditReportResponseFormat') }})
    certificate_authority_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    s3_bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    
