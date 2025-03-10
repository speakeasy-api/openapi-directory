"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UntagResourceRequest:
    
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resourceName') }})  
    tag_keys: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tagKeys') }})  
    resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resourceArn'), 'exclude': lambda f: f is None }})  
    