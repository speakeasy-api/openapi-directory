import dataclasses
from typing import Optional
from ..shared import selected_actions as shared_selected_actions


@dataclasses.dataclass
class ActionsGetAllowedActionsOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsGetAllowedActionsOrganizationRequest:
    path_params: ActionsGetAllowedActionsOrganizationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionsGetAllowedActionsOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    selected_actions: Optional[shared_selected_actions.SelectedActions] = dataclasses.field(default=None)
    
