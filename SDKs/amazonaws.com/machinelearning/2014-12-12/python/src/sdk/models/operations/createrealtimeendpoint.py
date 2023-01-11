import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createrealtimeendpointinput as shared_createrealtimeendpointinput
from ..shared import createrealtimeendpointoutput as shared_createrealtimeendpointoutput

class CreateRealtimeEndpointXAmzTargetEnum(str, Enum):
    AMAZON_ML_20141212_CREATE_REALTIME_ENDPOINT = "AmazonML_20141212.CreateRealtimeEndpoint"


@dataclasses.dataclass
class CreateRealtimeEndpointHeaders:
    x_amz_target: CreateRealtimeEndpointXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateRealtimeEndpointRequest:
    headers: CreateRealtimeEndpointHeaders = dataclasses.field()
    request: shared_createrealtimeendpointinput.CreateRealtimeEndpointInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRealtimeEndpointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_realtime_endpoint_output: Optional[shared_createrealtimeendpointoutput.CreateRealtimeEndpointOutput] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
