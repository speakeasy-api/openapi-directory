import dataclasses
from typing import Optional
from ..shared import ssostrategyentity as shared_ssostrategyentity


@dataclasses.dataclass
class GetSsoStrategiesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSsoStrategiesIDRequest:
    path_params: GetSsoStrategiesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSsoStrategiesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sso_strategy_entity: Optional[shared_ssostrategyentity.SsoStrategyEntity] = dataclasses.field(default=None)
    
