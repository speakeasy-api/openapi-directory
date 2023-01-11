import dataclasses



@dataclasses.dataclass
class InteractionsRemoveRestrictionsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
