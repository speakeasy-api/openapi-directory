import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagesearchitemeditorial as shared_imagesearchitemeditorial
from ..shared import relatedsearch as shared_relatedsearch


@dataclass_json
@dataclasses.dataclass
class EditorialImageSearchResults:
    images: Optional[list[shared_imagesearchitemeditorial.ImageSearchItemEditorial]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    related_searches: Optional[list[shared_relatedsearch.RelatedSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_searches') }})
    result_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    
