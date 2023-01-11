import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import scoutingobservation as shared_scoutingobservation


@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDPathParams:
    scouting_observation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scoutingObservationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDSecurity:
    api_key: Optional[shared_security.SchemeAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared_security.SchemeOauth2AuthorizationCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDRequest:
    path_params: GetV4LayersScoutingObservationsScoutingObservationIDPathParams = dataclasses.field()
    security: GetV4LayersScoutingObservationsScoutingObservationIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetV4LayersScoutingObservationsScoutingObservationIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    scouting_observation: Optional[shared_scoutingobservation.ScoutingObservation] = dataclasses.field(default=None)
    
