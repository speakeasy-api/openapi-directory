import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeresourcepoliciesrequest as shared_describeresourcepoliciesrequest
from ..shared import describeresourcepoliciesresponse as shared_describeresourcepoliciesresponse

class DescribeResourcePoliciesXAmzTargetEnum(str, Enum):
    LOGS_20140328_DESCRIBE_RESOURCE_POLICIES = "Logs_20140328.DescribeResourcePolicies"


@dataclasses.dataclass
class DescribeResourcePoliciesHeaders:
    x_amz_target: DescribeResourcePoliciesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeResourcePoliciesRequest:
    headers: DescribeResourcePoliciesHeaders = dataclasses.field()
    request: shared_describeresourcepoliciesrequest.DescribeResourcePoliciesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeResourcePoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_resource_policies_response: Optional[shared_describeresourcepoliciesresponse.DescribeResourcePoliciesResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
