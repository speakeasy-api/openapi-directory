import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httproute as shared_httproute
from ..shared import createrouteoutput as shared_createrouteoutput


@dataclasses.dataclass
class CreateRoutePathParams:
    mesh_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    virtual_router_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'virtualRouterName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateRouteHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateRouteRequestBodySpec:
    r"""CreateRouteRequestBodySpec
    An object representing the specification of a route.
    """
    
    http_route: Optional[shared_httproute.HTTPRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateRouteRequestBody:
    route_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeName') }})
    spec: CreateRouteRequestBodySpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    

@dataclasses.dataclass
class CreateRouteRequest:
    headers: CreateRouteHeaders = dataclasses.field()
    path_params: CreateRoutePathParams = dataclasses.field()
    request: CreateRouteRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_route_output: Optional[shared_createrouteoutput.CreateRouteOutput] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
