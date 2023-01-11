import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aspectdistribution as shared_aspectdistribution


@dataclass_json
@dataclasses.dataclass
class Refinement:
    r"""Refinement
    This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
    """
    
    aspect_distributions: Optional[list[shared_aspectdistribution.AspectDistribution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectDistributions') }})
    dominant_category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dominantCategoryId') }})
    
