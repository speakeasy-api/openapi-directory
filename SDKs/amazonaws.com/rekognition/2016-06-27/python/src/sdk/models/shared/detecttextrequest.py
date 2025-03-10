"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import detecttextfilters as shared_detecttextfilters
from ..shared import image as shared_image
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DetectTextRequest:
    
    image: shared_image.Image = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Image') }})  
    filters: Optional[shared_detecttextfilters.DetectTextFilters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Filters'), 'exclude': lambda f: f is None }})  
    