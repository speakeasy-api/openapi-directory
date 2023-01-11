import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createcustomroutingacceleratorrequest as shared_createcustomroutingacceleratorrequest
from ..shared import createcustomroutingacceleratorresponse as shared_createcustomroutingacceleratorresponse

class CreateCustomRoutingAcceleratorXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_CREATE_CUSTOM_ROUTING_ACCELERATOR = "GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator"


@dataclasses.dataclass
class CreateCustomRoutingAcceleratorHeaders:
    x_amz_target: CreateCustomRoutingAcceleratorXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCustomRoutingAcceleratorRequest:
    headers: CreateCustomRoutingAcceleratorHeaders = dataclasses.field()
    request: shared_createcustomroutingacceleratorrequest.CreateCustomRoutingAcceleratorRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCustomRoutingAcceleratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    create_custom_routing_accelerator_response: Optional[shared_createcustomroutingacceleratorresponse.CreateCustomRoutingAcceleratorResponse] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
