import dataclasses
from typing import Optional
from ..shared import selected_actions as shared_selected_actions


@dataclasses.dataclass
class ActionsSetAllowedActionsOrganizationPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionsSetAllowedActionsOrganizationRequest:
    path_params: ActionsSetAllowedActionsOrganizationPathParams = dataclasses.field()
    request: Optional[shared_selected_actions.SelectedActions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsSetAllowedActionsOrganizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
