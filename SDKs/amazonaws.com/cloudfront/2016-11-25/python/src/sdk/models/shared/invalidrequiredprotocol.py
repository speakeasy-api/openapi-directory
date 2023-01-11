import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidRequiredProtocol:
    r"""InvalidRequiredProtocol
    This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
