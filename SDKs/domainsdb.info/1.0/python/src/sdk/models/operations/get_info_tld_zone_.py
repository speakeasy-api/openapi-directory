import dataclasses
from typing import Optional
from ..shared import zone_info as shared_zone_info


@dataclasses.dataclass
class GetInfoTldZonePathParams:
    zone: str = dataclasses.field(metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInfoTldZoneQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInfoTldZoneRequest:
    path_params: GetInfoTldZonePathParams = dataclasses.field()
    query_params: GetInfoTldZoneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInfoTldZoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    zone_info: Optional[shared_zone_info.ZoneInfo] = dataclasses.field(default=None)
    
