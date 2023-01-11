import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describelogstreamsrequest as shared_describelogstreamsrequest
from ..shared import describelogstreamsresponse as shared_describelogstreamsresponse


@dataclasses.dataclass
class DescribeLogStreamsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class DescribeLogStreamsXAmzTargetEnum(str, Enum):
    LOGS_20140328_DESCRIBE_LOG_STREAMS = "Logs_20140328.DescribeLogStreams"


@dataclasses.dataclass
class DescribeLogStreamsHeaders:
    x_amz_target: DescribeLogStreamsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeLogStreamsRequest:
    headers: DescribeLogStreamsHeaders = dataclasses.field()
    query_params: DescribeLogStreamsQueryParams = dataclasses.field()
    request: shared_describelogstreamsrequest.DescribeLogStreamsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeLogStreamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_log_streams_response: Optional[shared_describelogstreamsresponse.DescribeLogStreamsResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
