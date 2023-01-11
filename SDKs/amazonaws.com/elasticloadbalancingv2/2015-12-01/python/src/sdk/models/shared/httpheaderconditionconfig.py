import dataclasses
from typing import Optional


@dataclasses.dataclass
class HTTPHeaderConditionConfig:
    r"""HTTPHeaderConditionConfig
    <p>Information about an HTTP header condition.</p> <p>There is a set of standard HTTP header fields. You can also define custom HTTP header fields.</p>
    """
    
    http_header_name: Optional[str] = dataclasses.field(default=None)
    values: Optional[list[str]] = dataclasses.field(default=None)
    
