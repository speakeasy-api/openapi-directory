import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import captionsource as shared_captionsource


@dataclass_json
@dataclasses.dataclass
class InputCaptions:
    r"""InputCaptions
    The captions to be created, if any.
    """
    
    caption_sources: Optional[list[shared_captionsource.CaptionSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptionSources') }})
    merge_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergePolicy') }})
    
