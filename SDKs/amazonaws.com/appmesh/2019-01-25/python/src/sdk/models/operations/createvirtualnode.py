import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backenddefaults as shared_backenddefaults
from ..shared import backend as shared_backend
from ..shared import listener as shared_listener
from ..shared import logging as shared_logging
from ..shared import servicediscovery as shared_servicediscovery
from ..shared import tagref as shared_tagref
from ..shared import createvirtualnodeoutput as shared_createvirtualnodeoutput


@dataclasses.dataclass
class CreateVirtualNodePathParams:
    mesh_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateVirtualNodeQueryParams:
    mesh_owner: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'meshOwner', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateVirtualNodeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVirtualNodeRequestBodySpec:
    r"""CreateVirtualNodeRequestBodySpec
    An object that represents the specification of a virtual node.
    """
    
    backend_defaults: Optional[shared_backenddefaults.BackendDefaults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backendDefaults') }})
    backends: Optional[list[shared_backend.Backend]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backends') }})
    listeners: Optional[list[shared_listener.Listener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    logging: Optional[shared_logging.Logging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logging') }})
    service_discovery: Optional[shared_servicediscovery.ServiceDiscovery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDiscovery') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVirtualNodeRequestBody:
    spec: CreateVirtualNodeRequestBodySpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    virtual_node_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNodeName') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    tags: Optional[list[shared_tagref.TagRef]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateVirtualNodeRequest:
    headers: CreateVirtualNodeHeaders = dataclasses.field()
    path_params: CreateVirtualNodePathParams = dataclasses.field()
    query_params: CreateVirtualNodeQueryParams = dataclasses.field()
    request: CreateVirtualNodeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateVirtualNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_virtual_node_output: Optional[shared_createvirtualnodeoutput.CreateVirtualNodeOutput] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
