import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetReservationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetReservationQueryParams:
    include_chargestation: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_chargestation', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetReservationRequest:
    path_params: GetReservationPathParams = dataclasses.field()
    query_params: GetReservationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetReservationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
