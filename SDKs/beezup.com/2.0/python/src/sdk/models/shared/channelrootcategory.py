import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelfirstlevelcategory as shared_channelfirstlevelcategory


@dataclass_json
@dataclasses.dataclass
class ChannelRootCategory:
    r"""ChannelRootCategory
    Get channel first level category list
    """
    
    first_level_categories: list[shared_channelfirstlevelcategory.ChannelFirstLevelCategory] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstLevelCategories') }})
    
