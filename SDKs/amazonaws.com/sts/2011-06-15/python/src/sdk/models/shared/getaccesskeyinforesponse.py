import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAccessKeyInfoResponse:
    account: Optional[str] = dataclasses.field(default=None)
    
