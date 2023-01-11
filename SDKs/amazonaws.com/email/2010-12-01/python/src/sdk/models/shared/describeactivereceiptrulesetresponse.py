import dataclasses
from typing import Optional
from ..shared import receiptrulesetmetadata as shared_receiptrulesetmetadata
from ..shared import receiptrule as shared_receiptrule


@dataclasses.dataclass
class DescribeActiveReceiptRuleSetResponse:
    r"""DescribeActiveReceiptRuleSetResponse
    Represents the metadata and receipt rules for the receipt rule set that is currently active.
    """
    
    metadata: Optional[shared_receiptrulesetmetadata.ReceiptRuleSetMetadata] = dataclasses.field(default=None)
    rules: Optional[list[shared_receiptrule.ReceiptRule]] = dataclasses.field(default=None)
    
