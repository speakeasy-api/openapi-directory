"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import target as shared_target
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateMaintenanceWindowTargetResult:
    r"""Success"""
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Name'), 'exclude': lambda f: f is None }})  
    owner_information: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OwnerInformation'), 'exclude': lambda f: f is None }})  
    targets: Optional[list[shared_target.Target]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Targets'), 'exclude': lambda f: f is None }})  
    window_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WindowId'), 'exclude': lambda f: f is None }})  
    window_target_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WindowTargetId'), 'exclude': lambda f: f is None }})  
    