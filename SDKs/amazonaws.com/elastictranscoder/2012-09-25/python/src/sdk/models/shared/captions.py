"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import captionformat as shared_captionformat
from ..shared import captionsource as shared_captionsource
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Captions:
    r"""The captions to be created, if any."""
    
    caption_formats: Optional[list[shared_captionformat.CaptionFormat]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CaptionFormats'), 'exclude': lambda f: f is None }})  
    caption_sources: Optional[list[shared_captionsource.CaptionSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CaptionSources'), 'exclude': lambda f: f is None }})  
    merge_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MergePolicy'), 'exclude': lambda f: f is None }})  
    