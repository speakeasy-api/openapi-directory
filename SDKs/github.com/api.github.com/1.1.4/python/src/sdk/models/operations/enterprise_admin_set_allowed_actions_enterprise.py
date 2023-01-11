import dataclasses
from typing import Optional
from ..shared import selected_actions as shared_selected_actions


@dataclasses.dataclass
class EnterpriseAdminSetAllowedActionsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminSetAllowedActionsEnterpriseRequest:
    path_params: EnterpriseAdminSetAllowedActionsEnterprisePathParams = dataclasses.field()
    request: Optional[shared_selected_actions.SelectedActions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminSetAllowedActionsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
