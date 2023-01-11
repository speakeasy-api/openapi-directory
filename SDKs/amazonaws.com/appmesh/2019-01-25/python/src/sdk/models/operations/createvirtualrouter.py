import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualrouterlistener as shared_virtualrouterlistener
from ..shared import tagref as shared_tagref
from ..shared import createvirtualrouteroutput as shared_createvirtualrouteroutput


@dataclasses.dataclass
class CreateVirtualRouterPathParams:
    mesh_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateVirtualRouterQueryParams:
    mesh_owner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'meshOwner', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateVirtualRouterHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVirtualRouterRequestBodySpec:
    r"""CreateVirtualRouterRequestBodySpec
    An object that represents the specification of a virtual router.
    """
    
    listeners: Optional[list[shared_virtualrouterlistener.VirtualRouterListener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVirtualRouterRequestBody:
    spec: CreateVirtualRouterRequestBodySpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    virtual_router_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouterName') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    tags: Optional[list[shared_tagref.TagRef]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateVirtualRouterRequest:
    headers: CreateVirtualRouterHeaders = dataclasses.field()
    path_params: CreateVirtualRouterPathParams = dataclasses.field()
    query_params: CreateVirtualRouterQueryParams = dataclasses.field()
    request: CreateVirtualRouterRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateVirtualRouterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_virtual_router_output: Optional[shared_createvirtualrouteroutput.CreateVirtualRouterOutput] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
