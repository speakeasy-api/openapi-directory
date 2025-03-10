"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DeregisterContainerInstanceRequest:
    
    container_instance: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('containerInstance') }})  
    cluster: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cluster'), 'exclude': lambda f: f is None }})  
    force: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('force'), 'exclude': lambda f: f is None }})  
    