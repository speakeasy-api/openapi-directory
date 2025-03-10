"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import counts as shared_counts
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListCoverageStatisticsResponse:
    r"""Success"""
    
    total_counts: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('totalCounts') }})  
    counts_by_group: Optional[list[shared_counts.Counts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('countsByGroup'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextToken'), 'exclude': lambda f: f is None }})  
    