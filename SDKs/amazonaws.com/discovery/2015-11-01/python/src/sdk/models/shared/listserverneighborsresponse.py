"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import neighborconnectiondetail as shared_neighborconnectiondetail
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListServerNeighborsResponse:
    r"""Success"""
    
    neighbors: list[shared_neighborconnectiondetail.NeighborConnectionDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('neighbors') }})  
    known_dependency_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('knownDependencyCount'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextToken'), 'exclude': lambda f: f is None }})  
    