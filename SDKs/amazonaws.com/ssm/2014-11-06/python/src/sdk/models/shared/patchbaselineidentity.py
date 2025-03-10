"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import operatingsystem_enum as shared_operatingsystem_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatchBaselineIdentity:
    r"""Defines the basic information about a patch baseline."""
    
    baseline_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BaselineDescription'), 'exclude': lambda f: f is None }})  
    baseline_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BaselineId'), 'exclude': lambda f: f is None }})  
    baseline_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BaselineName'), 'exclude': lambda f: f is None }})  
    default_baseline: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DefaultBaseline'), 'exclude': lambda f: f is None }})  
    operating_system: Optional[shared_operatingsystem_enum.OperatingSystemEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OperatingSystem'), 'exclude': lambda f: f is None }})  
    