import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import captionformat as shared_captionformat


@dataclass_json
@dataclasses.dataclass
class Captions:
    r"""Captions
    The captions to be created, if any.
    """
    
    caption_formats: Optional[list[shared_captionformat.CaptionFormat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptionFormats') }})
    caption_sources: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptionSources') }})
    merge_policy: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MergePolicy') }})
    
