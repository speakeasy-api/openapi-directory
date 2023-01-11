import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describecompliancebyresourcerequest as shared_describecompliancebyresourcerequest
from ..shared import describecompliancebyresourceresponse as shared_describecompliancebyresourceresponse


@dataclasses.dataclass
class DescribeComplianceByResourceQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeComplianceByResourceXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_COMPLIANCE_BY_RESOURCE = "StarlingDoveService.DescribeComplianceByResource"


@dataclasses.dataclass
class DescribeComplianceByResourceHeaders:
    x_amz_target: DescribeComplianceByResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeComplianceByResourceRequest:
    headers: DescribeComplianceByResourceHeaders = dataclasses.field()
    query_params: DescribeComplianceByResourceQueryParams = dataclasses.field()
    request: shared_describecompliancebyresourcerequest.DescribeComplianceByResourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeComplianceByResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_compliance_by_resource_response: Optional[shared_describecompliancebyresourceresponse.DescribeComplianceByResourceResponse] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    
