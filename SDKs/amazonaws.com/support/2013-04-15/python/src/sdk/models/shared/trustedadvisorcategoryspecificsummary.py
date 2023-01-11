import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trustedadvisorcostoptimizingsummary as shared_trustedadvisorcostoptimizingsummary


@dataclass_json
@dataclasses.dataclass
class TrustedAdvisorCategorySpecificSummary:
    r"""TrustedAdvisorCategorySpecificSummary
    The container for summary information that relates to the category of the Trusted Advisor check.
    """
    
    cost_optimizing: Optional[shared_trustedadvisorcostoptimizingsummary.TrustedAdvisorCostOptimizingSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costOptimizing') }})
    
