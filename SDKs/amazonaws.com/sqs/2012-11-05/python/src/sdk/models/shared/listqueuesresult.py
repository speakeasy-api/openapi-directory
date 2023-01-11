import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ListQueuesResult:
    r"""ListQueuesResult
    A list of your queues.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None)
    queue_urls: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
