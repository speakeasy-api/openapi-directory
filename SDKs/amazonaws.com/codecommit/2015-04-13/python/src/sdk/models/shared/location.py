"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import relativefileversionenum_enum as shared_relativefileversionenum_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Location:
    r"""Returns information about the location of a change or comment in the comparison between two commits or a pull request."""
    
    file_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('filePath'), 'exclude': lambda f: f is None }})  
    file_position: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('filePosition'), 'exclude': lambda f: f is None }})  
    relative_file_version: Optional[shared_relativefileversionenum_enum.RelativeFileVersionEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('relativeFileVersion'), 'exclude': lambda f: f is None }})  
    