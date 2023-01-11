import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AcceptReservedInstancesExchangeQuoteResult:
    r"""AcceptReservedInstancesExchangeQuoteResult
    The result of the exchange and whether it was <code>successful</code>.
    """
    
    exchange_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
