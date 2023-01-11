import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listcustomroutingportmappingsrequest as shared_listcustomroutingportmappingsrequest
from ..shared import listcustomroutingportmappingsresponse as shared_listcustomroutingportmappingsresponse


@dataclasses.dataclass
class ListCustomRoutingPortMappingsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListCustomRoutingPortMappingsXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_PORT_MAPPINGS = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings"


@dataclasses.dataclass
class ListCustomRoutingPortMappingsHeaders:
    x_amz_target: ListCustomRoutingPortMappingsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCustomRoutingPortMappingsRequest:
    headers: ListCustomRoutingPortMappingsHeaders = dataclasses.field()
    query_params: ListCustomRoutingPortMappingsQueryParams = dataclasses.field()
    request: shared_listcustomroutingportmappingsrequest.ListCustomRoutingPortMappingsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListCustomRoutingPortMappingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accelerator_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    endpoint_group_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_custom_routing_port_mappings_response: Optional[shared_listcustomroutingportmappingsresponse.ListCustomRoutingPortMappingsResponse] = dataclasses.field(default=None)
    
