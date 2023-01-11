import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import liststreamsinput as shared_liststreamsinput
from ..shared import liststreamsoutput as shared_liststreamsoutput


@dataclasses.dataclass
class ListStreamsQueryParams:
    exclusive_start_stream_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ExclusiveStartStreamName', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    
class ListStreamsXAmzTargetEnum(str, Enum):
    KINESIS_20131202_LIST_STREAMS = "Kinesis_20131202.ListStreams"


@dataclasses.dataclass
class ListStreamsHeaders:
    x_amz_target: ListStreamsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListStreamsRequest:
    headers: ListStreamsHeaders = dataclasses.field()
    query_params: ListStreamsQueryParams = dataclasses.field()
    request: shared_liststreamsinput.ListStreamsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListStreamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    list_streams_output: Optional[shared_liststreamsoutput.ListStreamsOutput] = dataclasses.field(default=None)
    
