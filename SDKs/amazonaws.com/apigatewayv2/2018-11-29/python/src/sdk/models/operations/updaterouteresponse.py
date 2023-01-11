import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import parameterconstraints as shared_parameterconstraints
from ..shared import updaterouteresponseresponse as shared_updaterouteresponseresponse


@dataclasses.dataclass
class UpdateRouteResponsePathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    route_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'routeId', 'style': 'simple', 'explode': False }})
    route_response_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'routeResponseId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateRouteResponseHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateRouteResponseRequestBody:
    model_selection_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelSelectionExpression') }})
    response_models: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseModels') }})
    response_parameters: Optional[dict[str, shared_parameterconstraints.ParameterConstraints]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParameters') }})
    route_response_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeResponseKey') }})
    

@dataclasses.dataclass
class UpdateRouteResponseRequest:
    headers: UpdateRouteResponseHeaders = dataclasses.field()
    path_params: UpdateRouteResponsePathParams = dataclasses.field()
    request: UpdateRouteResponseRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateRouteResponseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_route_response_response: Optional[shared_updaterouteresponseresponse.UpdateRouteResponseResponse] = dataclasses.field(default=None)
    
