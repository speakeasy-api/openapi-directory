import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aspectrecommendations as shared_aspectrecommendations
from ..shared import productrecommendation as shared_productrecommendation


@dataclass_json
@dataclasses.dataclass
class CorrectiveRecommendations:
    r"""CorrectiveRecommendations
    This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
    """
    
    aspect_recommendations: Optional[list[shared_aspectrecommendations.AspectRecommendations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectRecommendations') }})
    product_recommendation: Optional[shared_productrecommendation.ProductRecommendation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRecommendation') }})
    
