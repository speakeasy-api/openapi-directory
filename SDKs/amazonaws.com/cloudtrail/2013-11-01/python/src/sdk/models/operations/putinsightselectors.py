import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putinsightselectorsrequest as shared_putinsightselectorsrequest
from ..shared import putinsightselectorsresponse as shared_putinsightselectorsresponse

class PutInsightSelectorsXAmzTargetEnum(str, Enum):
    COM_AMAZONAWS_CLOUDTRAIL_V20131101_CLOUD_TRAIL_20131101_PUT_INSIGHT_SELECTORS = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"


@dataclasses.dataclass
class PutInsightSelectorsHeaders:
    x_amz_target: PutInsightSelectorsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutInsightSelectorsRequest:
    headers: PutInsightSelectorsHeaders = dataclasses.field()
    request: shared_putinsightselectorsrequest.PutInsightSelectorsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutInsightSelectorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insufficient_encryption_policy_exception: Optional[Any] = dataclasses.field(default=None)
    insufficient_s3_bucket_policy_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_home_region_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_insight_selectors_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_trail_name_exception: Optional[Any] = dataclasses.field(default=None)
    kms_exception: Optional[Any] = dataclasses.field(default=None)
    not_organization_master_account_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    put_insight_selectors_response: Optional[shared_putinsightselectorsresponse.PutInsightSelectorsResponse] = dataclasses.field(default=None)
    s3_bucket_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    trail_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
