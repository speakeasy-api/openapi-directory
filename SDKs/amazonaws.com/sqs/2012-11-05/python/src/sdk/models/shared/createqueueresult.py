import dataclasses
from typing import Optional


@dataclasses.dataclass
class CreateQueueResult:
    r"""CreateQueueResult
    Returns the <code>QueueUrl</code> attribute of the created queue.
    """
    
    queue_url: Optional[str] = dataclasses.field(default=None)
    
