import dataclasses
from typing import Optional
from ..shared import interaction_limit as shared_interaction_limit
from ..shared import interaction_limit_response as shared_interaction_limit_response


@dataclasses.dataclass
class InteractionsSetRestrictionsForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InteractionsSetRestrictionsForRepoRequest:
    path_params: InteractionsSetRestrictionsForRepoPathParams = dataclasses.field()
    request: Optional[shared_interaction_limit.InteractionLimit] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InteractionsSetRestrictionsForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interaction_limit_response: Optional[shared_interaction_limit_response.InteractionLimitResponse] = dataclasses.field(default=None)
    
