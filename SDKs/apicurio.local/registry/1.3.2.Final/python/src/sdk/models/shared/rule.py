"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import ruletype_enum as shared_ruletype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Rule:
    r"""Information about a rule."""
    
    config: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('config') }})  
    type: Optional[shared_ruletype_enum.RuleTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})  
    