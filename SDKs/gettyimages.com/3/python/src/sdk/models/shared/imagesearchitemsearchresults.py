import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagesearchitem as shared_imagesearchitem
from ..shared import relatedsearch as shared_relatedsearch


@dataclass_json
@dataclasses.dataclass
class ImageSearchItemSearchResults:
    images: Optional[list[shared_imagesearchitem.ImageSearchItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    related_searches: Optional[list[shared_relatedsearch.RelatedSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_searches') }})
    result_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    
