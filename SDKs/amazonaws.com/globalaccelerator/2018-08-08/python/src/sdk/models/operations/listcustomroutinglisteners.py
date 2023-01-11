import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listcustomroutinglistenersrequest as shared_listcustomroutinglistenersrequest
from ..shared import listcustomroutinglistenersresponse as shared_listcustomroutinglistenersresponse


@dataclasses.dataclass
class ListCustomRoutingListenersQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCustomRoutingListenersXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_LISTENERS = "GlobalAccelerator_V20180706.ListCustomRoutingListeners"


@dataclasses.dataclass
class ListCustomRoutingListenersHeaders:
    x_amz_target: ListCustomRoutingListenersXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCustomRoutingListenersRequest:
    headers: ListCustomRoutingListenersHeaders = dataclasses.field()
    query_params: ListCustomRoutingListenersQueryParams = dataclasses.field()
    request: shared_listcustomroutinglistenersrequest.ListCustomRoutingListenersRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListCustomRoutingListenersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accelerator_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_custom_routing_listeners_response: Optional[shared_listcustomroutinglistenersresponse.ListCustomRoutingListenersResponse] = dataclasses.field(default=None)
    
