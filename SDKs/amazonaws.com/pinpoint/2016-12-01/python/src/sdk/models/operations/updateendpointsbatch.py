import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointbatchitem as shared_endpointbatchitem
from ..shared import updateendpointsbatchresponse as shared_updateendpointsbatchresponse


@dataclasses.dataclass
class UpdateEndpointsBatchPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEndpointsBatchHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateEndpointsBatchRequestBodyEndpointBatchRequest:
    r"""UpdateEndpointsBatchRequestBodyEndpointBatchRequest
    Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
    """
    
    item: Optional[list[shared_endpointbatchitem.EndpointBatchItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateEndpointsBatchRequestBody:
    endpoint_batch_request: UpdateEndpointsBatchRequestBodyEndpointBatchRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointBatchRequest') }})
    

@dataclasses.dataclass
class UpdateEndpointsBatchRequest:
    headers: UpdateEndpointsBatchHeaders = dataclasses.field()
    path_params: UpdateEndpointsBatchPathParams = dataclasses.field()
    request: UpdateEndpointsBatchRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateEndpointsBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_endpoints_batch_response: Optional[shared_updateendpointsbatchresponse.UpdateEndpointsBatchResponse] = dataclasses.field(default=None)
    
