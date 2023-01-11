import dataclasses
from typing import Any


@dataclasses.dataclass
class StatusCodes:
    r"""StatusCodes
    A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
    """
    
    items: list[dict[str, Any]] = dataclasses.field()
    quantity: int = dataclasses.field()
    
