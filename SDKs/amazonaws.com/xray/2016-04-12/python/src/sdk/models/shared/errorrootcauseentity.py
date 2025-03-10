"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import rootcauseexception as shared_rootcauseexception
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ErrorRootCauseEntity:
    r"""A collection of segments and corresponding subsegments associated to a trace summary error."""
    
    exceptions: Optional[list[shared_rootcauseexception.RootCauseException]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Exceptions'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Name'), 'exclude': lambda f: f is None }})  
    remote: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Remote'), 'exclude': lambda f: f is None }})  
    