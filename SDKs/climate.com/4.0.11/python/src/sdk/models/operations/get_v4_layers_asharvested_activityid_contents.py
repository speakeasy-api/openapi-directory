import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class GetV4LayersAsHarvestedActivityIDContentsPathParams:
    activity_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV4LayersAsHarvestedActivityIDContentsHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    range: str = dataclasses.field(metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV4LayersAsHarvestedActivityIDContentsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetV4LayersAsHarvestedActivityIDContentsRequest:
    headers: GetV4LayersAsHarvestedActivityIDContentsHeaders = dataclasses.field()
    path_params: GetV4LayersAsHarvestedActivityIDContentsPathParams = dataclasses.field()
    security: GetV4LayersAsHarvestedActivityIDContentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetV4LayersAsHarvestedActivityIDContentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
