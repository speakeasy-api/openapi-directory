import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeimagescanfindingsrequest as shared_describeimagescanfindingsrequest
from ..shared import describeimagescanfindingsresponse as shared_describeimagescanfindingsresponse


@dataclasses.dataclass
class DescribeImageScanFindingsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribeImageScanFindingsXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_DESCRIBE_IMAGE_SCAN_FINDINGS = "AmazonEC2ContainerRegistry_V20150921.DescribeImageScanFindings"


@dataclasses.dataclass
class DescribeImageScanFindingsHeaders:
    x_amz_target: DescribeImageScanFindingsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeImageScanFindingsRequest:
    headers: DescribeImageScanFindingsHeaders = dataclasses.field()
    query_params: DescribeImageScanFindingsQueryParams = dataclasses.field()
    request: shared_describeimagescanfindingsrequest.DescribeImageScanFindingsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeImageScanFindingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_image_scan_findings_response: Optional[shared_describeimagescanfindingsresponse.DescribeImageScanFindingsResponse] = dataclasses.field(default=None)
    image_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    scan_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
