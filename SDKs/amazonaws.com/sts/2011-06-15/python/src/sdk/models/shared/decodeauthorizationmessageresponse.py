import dataclasses
from typing import Optional


@dataclasses.dataclass
class DecodeAuthorizationMessageResponse:
    r"""DecodeAuthorizationMessageResponse
    A document that contains additional information about the authorization status of a request from an encoded message that is returned in response to an Amazon Web Services request.
    """
    
    decoded_message: Optional[str] = dataclasses.field(default=None)
    
