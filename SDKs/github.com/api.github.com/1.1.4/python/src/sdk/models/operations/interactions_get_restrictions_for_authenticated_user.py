import dataclasses
from typing import Optional
from ..shared import interaction_limit_response as shared_interaction_limit_response


@dataclasses.dataclass
class InteractionsGetRestrictionsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    interaction_limit_response: Optional[shared_interaction_limit_response.InteractionLimitResponse] = dataclasses.field(default=None)
    
