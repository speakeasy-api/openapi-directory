import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTransactionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionQueryParams:
    include_chargestation: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_chargestation', 'style': 'form', 'explode': True }})
    include_connector: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_connector', 'style': 'form', 'explode': True }})
    include_driver: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_driver', 'style': 'form', 'explode': True }})
    include_evse: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_rate: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_rate', 'style': 'form', 'explode': True }})
    include_reservation: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_reservation', 'style': 'form', 'explode': True }})
    include_token: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTransactionRequest:
    path_params: GetTransactionPathParams = dataclasses.field()
    query_params: GetTransactionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
