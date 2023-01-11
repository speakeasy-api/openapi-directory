import dataclasses
from typing import Optional
from ..shared import selected_actions as shared_selected_actions


@dataclasses.dataclass
class EnterpriseAdminGetAllowedActionsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetAllowedActionsEnterpriseRequest:
    path_params: EnterpriseAdminGetAllowedActionsEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetAllowedActionsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    selected_actions: Optional[shared_selected_actions.SelectedActions] = dataclasses.field(default=None)
    
