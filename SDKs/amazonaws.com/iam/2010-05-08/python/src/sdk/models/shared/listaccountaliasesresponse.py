import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListAccountAliasesResponse:
    r"""ListAccountAliasesResponse
    Contains the response to a successful <a>ListAccountAliases</a> request. 
    """
    
    account_aliases: list[str] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
