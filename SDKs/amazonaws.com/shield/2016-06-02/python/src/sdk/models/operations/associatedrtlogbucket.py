import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import associatedrtlogbucketrequest as shared_associatedrtlogbucketrequest

class AssociateDrtLogBucketXAmzTargetEnum(str, Enum):
    AWS_SHIELD_20160616_ASSOCIATE_DRT_LOG_BUCKET = "AWSShield_20160616.AssociateDRTLogBucket"


@dataclasses.dataclass
class AssociateDrtLogBucketHeaders:
    x_amz_target: AssociateDrtLogBucketXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AssociateDrtLogBucketRequest:
    headers: AssociateDrtLogBucketHeaders = dataclasses.field()
    request: shared_associatedrtlogbucketrequest.AssociateDrtLogBucketRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssociateDrtLogBucketResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_for_dependency_exception: Optional[Any] = dataclasses.field(default=None)
    associate_drt_log_bucket_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_operation_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    limits_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    no_associated_role_exception: Optional[Any] = dataclasses.field(default=None)
    optimistic_lock_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
