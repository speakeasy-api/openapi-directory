import dataclasses
from typing import Optional
from ..shared import receiptrulesetmetadata as shared_receiptrulesetmetadata
from ..shared import receiptrule as shared_receiptrule


@dataclasses.dataclass
class DescribeReceiptRuleSetResponse:
    r"""DescribeReceiptRuleSetResponse
    Represents the details of the specified receipt rule set.
    """
    
    metadata: Optional[shared_receiptrulesetmetadata.ReceiptRuleSetMetadata] = dataclasses.field(default=None)
    rules: Optional[list[shared_receiptrule.ReceiptRule]] = dataclasses.field(default=None)
    
