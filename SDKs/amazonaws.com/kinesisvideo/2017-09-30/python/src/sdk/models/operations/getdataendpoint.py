import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getdataendpointoutput as shared_getdataendpointoutput


@dataclasses.dataclass
class GetDataEndpointHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetDataEndpointRequestBodyAPINameEnum(str, Enum):
    PUT_MEDIA = "PUT_MEDIA"
    GET_MEDIA = "GET_MEDIA"
    LIST_FRAGMENTS = "LIST_FRAGMENTS"
    GET_MEDIA_FOR_FRAGMENT_LIST = "GET_MEDIA_FOR_FRAGMENT_LIST"
    GET_HLS_STREAMING_SESSION_URL = "GET_HLS_STREAMING_SESSION_URL"
    GET_DASH_STREAMING_SESSION_URL = "GET_DASH_STREAMING_SESSION_URL"
    GET_CLIP = "GET_CLIP"


@dataclass_json
@dataclasses.dataclass
class GetDataEndpointRequestBody:
    api_name: GetDataEndpointRequestBodyAPINameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('APIName') }})
    stream_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    

@dataclasses.dataclass
class GetDataEndpointRequest:
    headers: GetDataEndpointHeaders = dataclasses.field()
    request: GetDataEndpointRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDataEndpointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    get_data_endpoint_output: Optional[shared_getdataendpointoutput.GetDataEndpointOutput] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    not_authorized_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
