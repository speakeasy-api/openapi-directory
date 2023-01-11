import dataclasses
from typing import Optional
from ..shared import receiptfilter as shared_receiptfilter


@dataclasses.dataclass
class ListReceiptFiltersResponse:
    r"""ListReceiptFiltersResponse
    A list of IP address filters that exist under your AWS account.
    """
    
    filters: Optional[list[shared_receiptfilter.ReceiptFilter]] = dataclasses.field(default=None)
    
