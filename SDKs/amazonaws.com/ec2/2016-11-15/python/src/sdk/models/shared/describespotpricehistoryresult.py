import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeSpotPriceHistoryResult:
    r"""DescribeSpotPriceHistoryResult
    Contains the output of DescribeSpotPriceHistory.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    spot_price_history: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
