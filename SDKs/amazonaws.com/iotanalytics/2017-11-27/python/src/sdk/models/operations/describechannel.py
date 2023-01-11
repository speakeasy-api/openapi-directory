import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describechannelresponse as shared_describechannelresponse


@dataclasses.dataclass
class DescribeChannelPathParams:
    channel_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'channelName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeChannelQueryParams:
    include_statistics: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeStatistics', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DescribeChannelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeChannelRequest:
    headers: DescribeChannelHeaders = dataclasses.field()
    path_params: DescribeChannelPathParams = dataclasses.field()
    query_params: DescribeChannelQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_channel_response: Optional[shared_describechannelresponse.DescribeChannelResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
