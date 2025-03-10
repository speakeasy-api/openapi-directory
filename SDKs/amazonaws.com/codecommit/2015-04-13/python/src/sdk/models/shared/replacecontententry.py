"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import filemodetypeenum_enum as shared_filemodetypeenum_enum
from ..shared import replacementtypeenum_enum as shared_replacementtypeenum_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReplaceContentEntry:
    r"""Information about a replacement content entry in the conflict of a merge or pull request operation."""
    
    file_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('filePath') }})  
    replacement_type: shared_replacementtypeenum_enum.ReplacementTypeEnumEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('replacementType') }})  
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('content'), 'exclude': lambda f: f is None }})  
    file_mode: Optional[shared_filemodetypeenum_enum.FileModeTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fileMode'), 'exclude': lambda f: f is None }})  
    