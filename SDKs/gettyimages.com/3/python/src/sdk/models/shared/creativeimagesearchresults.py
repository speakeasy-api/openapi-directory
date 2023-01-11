import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autocorrections as shared_autocorrections
from ..shared import imagesearchitemcreative as shared_imagesearchitemcreative
from ..shared import relatedsearch as shared_relatedsearch


@dataclass_json
@dataclasses.dataclass
class CreativeImageSearchResults:
    auto_corrections: Optional[shared_autocorrections.AutoCorrections] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_corrections') }})
    images: Optional[list[shared_imagesearchitemcreative.ImageSearchItemCreative]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    related_searches: Optional[list[shared_relatedsearch.RelatedSearch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related_searches') }})
    result_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    
