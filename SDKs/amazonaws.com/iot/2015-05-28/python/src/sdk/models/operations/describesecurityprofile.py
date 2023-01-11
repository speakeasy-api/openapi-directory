import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describesecurityprofileresponse as shared_describesecurityprofileresponse


@dataclasses.dataclass
class DescribeSecurityProfilePathParams:
    security_profile_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'securityProfileName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeSecurityProfileHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeSecurityProfileRequest:
    headers: DescribeSecurityProfileHeaders = dataclasses.field()
    path_params: DescribeSecurityProfilePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeSecurityProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_security_profile_response: Optional[shared_describesecurityprofileresponse.DescribeSecurityProfileResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
