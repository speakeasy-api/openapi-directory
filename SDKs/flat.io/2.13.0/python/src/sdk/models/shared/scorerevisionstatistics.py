"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ScoreRevisionStatistics:
    r"""The statistics related to the score revision (additions and deletions)"""
    
    additions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('additions'), 'exclude': lambda f: f is None }})
    r"""The number of additions operations in the last revision"""  
    deletions: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deletions'), 'exclude': lambda f: f is None }})
    r"""The number of deletions operations in the last revision"""  
    