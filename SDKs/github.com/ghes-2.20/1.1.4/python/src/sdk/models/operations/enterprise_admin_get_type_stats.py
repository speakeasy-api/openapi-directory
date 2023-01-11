import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EnterpriseAdminGetTypeStatsPathParams:
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetTypeStatsRequest:
    path_params: EnterpriseAdminGetTypeStatsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetTypeStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_get_type_stats_200_application_json_any_of: Optional[Any] = dataclasses.field(default=None)
    
