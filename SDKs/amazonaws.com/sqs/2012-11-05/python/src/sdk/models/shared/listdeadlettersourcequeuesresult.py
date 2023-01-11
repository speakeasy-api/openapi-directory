import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ListDeadLetterSourceQueuesResult:
    r"""ListDeadLetterSourceQueuesResult
    A list of your dead letter source queues.
    """
    
    queue_urls: list[dict[str, Any]] = dataclasses.field()
    next_token: Optional[str] = dataclasses.field(default=None)
    
