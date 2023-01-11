import dataclasses
from typing import Optional


@dataclasses.dataclass
class FixedResponseActionConfig:
    r"""FixedResponseActionConfig
    Information about an action that returns a custom HTTP response.
    """
    
    status_code: str = dataclasses.field()
    content_type: Optional[str] = dataclasses.field(default=None)
    message_body: Optional[str] = dataclasses.field(default=None)
    
