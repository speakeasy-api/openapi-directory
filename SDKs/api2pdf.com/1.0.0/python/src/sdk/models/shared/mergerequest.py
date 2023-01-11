import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MergeRequest:
    urls: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    inline_pdf: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlinePdf') }})
    
