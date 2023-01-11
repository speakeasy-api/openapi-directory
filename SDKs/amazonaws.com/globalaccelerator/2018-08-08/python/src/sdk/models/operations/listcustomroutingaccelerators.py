import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listcustomroutingacceleratorsrequest as shared_listcustomroutingacceleratorsrequest
from ..shared import listcustomroutingacceleratorsresponse as shared_listcustomroutingacceleratorsresponse


@dataclasses.dataclass
class ListCustomRoutingAcceleratorsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCustomRoutingAcceleratorsXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_ACCELERATORS = "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators"


@dataclasses.dataclass
class ListCustomRoutingAcceleratorsHeaders:
    x_amz_target: ListCustomRoutingAcceleratorsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCustomRoutingAcceleratorsRequest:
    headers: ListCustomRoutingAcceleratorsHeaders = dataclasses.field()
    query_params: ListCustomRoutingAcceleratorsQueryParams = dataclasses.field()
    request: shared_listcustomroutingacceleratorsrequest.ListCustomRoutingAcceleratorsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListCustomRoutingAcceleratorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_custom_routing_accelerators_response: Optional[shared_listcustomroutingacceleratorsresponse.ListCustomRoutingAcceleratorsResponse] = dataclasses.field(default=None)
    
