import dataclasses
from typing import Optional


@dataclasses.dataclass
class SendCustomVerificationEmailResponse:
    r"""SendCustomVerificationEmailResponse
    The response received when attempting to send the custom verification email.
    """
    
    message_id: Optional[str] = dataclasses.field(default=None)
    
