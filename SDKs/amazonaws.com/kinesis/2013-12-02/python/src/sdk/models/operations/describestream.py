import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describestreaminput as shared_describestreaminput
from ..shared import describestreamoutput as shared_describestreamoutput


@dataclasses.dataclass
class DescribeStreamQueryParams:
    exclusive_start_shard_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExclusiveStartShardId', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    
class DescribeStreamXAmzTargetEnum(str, Enum):
    KINESIS_20131202_DESCRIBE_STREAM = "Kinesis_20131202.DescribeStream"


@dataclasses.dataclass
class DescribeStreamHeaders:
    x_amz_target: DescribeStreamXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeStreamRequest:
    headers: DescribeStreamHeaders = dataclasses.field()
    query_params: DescribeStreamQueryParams = dataclasses.field()
    request: shared_describestreaminput.DescribeStreamInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeStreamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_stream_output: Optional[shared_describestreamoutput.DescribeStreamOutput] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
