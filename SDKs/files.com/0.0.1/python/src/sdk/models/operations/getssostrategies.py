import dataclasses
from typing import Optional
from ..shared import ssostrategyentity as shared_ssostrategyentity


@dataclasses.dataclass
class GetSsoStrategiesQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSsoStrategiesRequest:
    query_params: GetSsoStrategiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSsoStrategiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sso_strategy_entities: Optional[list[shared_ssostrategyentity.SsoStrategyEntity]] = dataclasses.field(default=None)
    
