import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tainteffect_enum as shared_tainteffect_enum


@dataclass_json
@dataclasses.dataclass
class Taint:
    r"""Taint
    A property that allows a node to repel a set of pods.
    """
    
    effect: Optional[shared_tainteffect_enum.TaintEffectEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
