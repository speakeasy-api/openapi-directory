import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describeaccesspointsresponse as shared_describeaccesspointsresponse


@dataclasses.dataclass
class DescribeAccessPointsQueryParams:
    access_point_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AccessPointId', 'style': 'form', 'explode': True }})
    file_system_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FileSystemId', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DescribeAccessPointsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeAccessPointsRequest:
    headers: DescribeAccessPointsHeaders = dataclasses.field()
    query_params: DescribeAccessPointsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeAccessPointsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_point_not_found: Optional[Any] = dataclasses.field(default=None)
    bad_request: Optional[Any] = dataclasses.field(default=None)
    describe_access_points_response: Optional[shared_describeaccesspointsresponse.DescribeAccessPointsResponse] = dataclasses.field(default=None)
    file_system_not_found: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    
