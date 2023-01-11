import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error


@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams:
    scouting_observation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scoutingObservationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders:
    x_limit: Optional[int] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Limit', 'style': 'simple', 'explode': False }})
    x_next_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Next-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsRequest:
    headers: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsHeaders = dataclasses.field()
    path_params: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsPathParams = dataclasses.field()
    security: GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDAttachmentsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    scouting_observation_attachments: Optional[Any] = dataclasses.field(default=None)
    
