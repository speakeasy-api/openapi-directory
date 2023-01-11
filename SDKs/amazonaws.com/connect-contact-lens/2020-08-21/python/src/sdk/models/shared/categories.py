import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import categorydetails as shared_categorydetails


@dataclass_json
@dataclasses.dataclass
class Categories:
    r"""Categories
    Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
    """
    
    matched_categories: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedCategories') }})
    matched_details: dict[str, shared_categorydetails.CategoryDetails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedDetails') }})
    
