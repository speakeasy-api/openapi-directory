import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaybackenddefaults as shared_virtualgatewaybackenddefaults
from ..shared import virtualgatewaylistener as shared_virtualgatewaylistener
from ..shared import virtualgatewaylogging as shared_virtualgatewaylogging
from ..shared import tagref as shared_tagref
from ..shared import createvirtualgatewayoutput as shared_createvirtualgatewayoutput


@dataclasses.dataclass
class CreateVirtualGatewayPathParams:
    mesh_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateVirtualGatewayQueryParams:
    mesh_owner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'meshOwner', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateVirtualGatewayHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVirtualGatewayRequestBodySpec:
    r"""CreateVirtualGatewayRequestBodySpec
    An object that represents the specification of a service mesh resource.
    """
    
    backend_defaults: Optional[shared_virtualgatewaybackenddefaults.VirtualGatewayBackendDefaults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendDefaults') }})
    listeners: Optional[list[shared_virtualgatewaylistener.VirtualGatewayListener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    logging: Optional[shared_virtualgatewaylogging.VirtualGatewayLogging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVirtualGatewayRequestBody:
    spec: CreateVirtualGatewayRequestBodySpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    virtual_gateway_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayName') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    tags: Optional[list[shared_tagref.TagRef]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateVirtualGatewayRequest:
    headers: CreateVirtualGatewayHeaders = dataclasses.field()
    path_params: CreateVirtualGatewayPathParams = dataclasses.field()
    query_params: CreateVirtualGatewayQueryParams = dataclasses.field()
    request: CreateVirtualGatewayRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateVirtualGatewayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_virtual_gateway_output: Optional[shared_createvirtualgatewayoutput.CreateVirtualGatewayOutput] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
