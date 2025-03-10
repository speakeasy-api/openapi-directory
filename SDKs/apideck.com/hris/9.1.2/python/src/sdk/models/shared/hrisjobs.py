"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import employee as shared_employee
from ..shared import hrisjob as shared_hrisjob
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class HrisJobs:
    
    employee: Optional[shared_employee.Employee] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('employee'), 'exclude': lambda f: f is None }})  
    jobs: Optional[list[shared_hrisjob.HrisJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jobs'), 'exclude': lambda f: f is None }})  
    