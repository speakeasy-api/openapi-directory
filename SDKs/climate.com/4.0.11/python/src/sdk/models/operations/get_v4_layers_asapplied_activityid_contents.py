import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class GetV4LayersAsAppliedActivityIDContentsPathParams:
    activity_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV4LayersAsAppliedActivityIDContentsHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    range: str = dataclasses.field(metadata={'header': { 'field_name': 'Range', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV4LayersAsAppliedActivityIDContentsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetV4LayersAsAppliedActivityIDContentsRequest:
    headers: GetV4LayersAsAppliedActivityIDContentsHeaders = dataclasses.field()
    path_params: GetV4LayersAsAppliedActivityIDContentsPathParams = dataclasses.field()
    security: GetV4LayersAsAppliedActivityIDContentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetV4LayersAsAppliedActivityIDContentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
