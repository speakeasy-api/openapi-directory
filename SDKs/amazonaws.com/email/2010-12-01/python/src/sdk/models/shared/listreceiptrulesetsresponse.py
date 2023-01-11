import dataclasses
from typing import Optional
from ..shared import receiptrulesetmetadata as shared_receiptrulesetmetadata


@dataclasses.dataclass
class ListReceiptRuleSetsResponse:
    r"""ListReceiptRuleSetsResponse
    A list of receipt rule sets that exist under your AWS account.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None)
    rule_sets: Optional[list[shared_receiptrulesetmetadata.ReceiptRuleSetMetadata]] = dataclasses.field(default=None)
    
