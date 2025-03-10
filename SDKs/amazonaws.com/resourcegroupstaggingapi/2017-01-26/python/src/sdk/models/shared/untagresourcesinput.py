"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UntagResourcesInput:
    
    resource_arn_list: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceARNList') }})  
    tag_keys: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TagKeys') }})  
    