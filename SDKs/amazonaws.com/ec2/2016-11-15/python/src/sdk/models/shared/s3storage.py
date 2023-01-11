import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class S3Storage:
    r"""S3Storage
    Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
    """
    
    aws_access_key_id: Optional[str] = dataclasses.field(default=None)
    bucket: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix: Optional[dict[str, Any]] = dataclasses.field(default=None)
    upload_policy: Optional[dict[str, Any]] = dataclasses.field(default=None)
    upload_policy_signature: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
