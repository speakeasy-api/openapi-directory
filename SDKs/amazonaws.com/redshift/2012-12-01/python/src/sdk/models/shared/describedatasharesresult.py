import dataclasses
from typing import Optional
from ..shared import datashare as shared_datashare


@dataclasses.dataclass
class DescribeDataSharesResult:
    data_shares: Optional[list[shared_datashare.DataShare]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
