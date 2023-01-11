import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAccountSummaryResponse:
    r"""GetAccountSummaryResponse
    Contains the response to a successful <a>GetAccountSummary</a> request. 
    """
    
    summary_map: Optional[dict[str, int]] = dataclasses.field(default=None)
    
