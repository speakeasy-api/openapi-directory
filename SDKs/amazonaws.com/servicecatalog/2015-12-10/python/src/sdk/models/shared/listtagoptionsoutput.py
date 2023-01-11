import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagoptiondetail as shared_tagoptiondetail


@dataclass_json
@dataclasses.dataclass
class ListTagOptionsOutput:
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageToken') }})
    tag_option_details: Optional[list[shared_tagoptiondetail.TagOptionDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagOptionDetails') }})
    
