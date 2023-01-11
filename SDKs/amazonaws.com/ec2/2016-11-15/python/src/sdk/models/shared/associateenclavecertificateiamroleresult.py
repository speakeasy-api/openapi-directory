import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateEnclaveCertificateIamRoleResult:
    certificate_s3_bucket_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    certificate_s3_object_key: Optional[dict[str, Any]] = dataclasses.field(default=None)
    encryption_kms_key_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
