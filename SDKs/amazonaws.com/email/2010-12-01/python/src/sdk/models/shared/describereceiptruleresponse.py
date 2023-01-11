import dataclasses
from typing import Optional
from ..shared import receiptrule as shared_receiptrule


@dataclasses.dataclass
class DescribeReceiptRuleResponse:
    r"""DescribeReceiptRuleResponse
    Represents the details of a receipt rule.
    """
    
    rule: Optional[shared_receiptrule.ReceiptRule] = dataclasses.field(default=None)
    
