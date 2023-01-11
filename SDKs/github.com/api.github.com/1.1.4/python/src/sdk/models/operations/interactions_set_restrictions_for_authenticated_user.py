import dataclasses
from typing import Optional
from ..shared import interaction_limit as shared_interaction_limit
from ..shared import interaction_limit_response as shared_interaction_limit_response
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class InteractionsSetRestrictionsForAuthenticatedUserRequest:
    request: Optional[shared_interaction_limit.InteractionLimit] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InteractionsSetRestrictionsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interaction_limit_response: Optional[shared_interaction_limit_response.InteractionLimitResponse] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
