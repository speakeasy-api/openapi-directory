import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListIdentitiesResponse:
    r"""ListIdentitiesResponse
    A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.
    """
    
    identities: list[str] = dataclasses.field()
    next_token: Optional[str] = dataclasses.field(default=None)
    
