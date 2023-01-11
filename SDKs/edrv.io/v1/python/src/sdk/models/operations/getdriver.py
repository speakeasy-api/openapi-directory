import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetDriverPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDriverQueryParams:
    include_group: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_group', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_tokens: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_tokens', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDriverRequest:
    path_params: GetDriverPathParams = dataclasses.field()
    query_params: GetDriverQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDriverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
