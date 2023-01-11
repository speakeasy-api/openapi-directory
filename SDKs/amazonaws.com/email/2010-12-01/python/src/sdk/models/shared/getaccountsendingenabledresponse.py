import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAccountSendingEnabledResponse:
    r"""GetAccountSendingEnabledResponse
    Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None)
    
