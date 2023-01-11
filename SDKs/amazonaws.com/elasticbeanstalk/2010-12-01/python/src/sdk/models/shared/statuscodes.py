import dataclasses
from typing import Optional


@dataclasses.dataclass
class StatusCodes:
    r"""StatusCodes
    Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html\">Status Code Definitions</a>.
    """
    
    status2xx: Optional[int] = dataclasses.field(default=None)
    status3xx: Optional[int] = dataclasses.field(default=None)
    status4xx: Optional[int] = dataclasses.field(default=None)
    status5xx: Optional[int] = dataclasses.field(default=None)
    
