import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetConnectorPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConnectorQueryParams:
    include_evse: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_rate: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_rate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConnectorRequest:
    path_params: GetConnectorPathParams = dataclasses.field()
    query_params: GetConnectorQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConnectorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
