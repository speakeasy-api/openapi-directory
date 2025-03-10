"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import links_getuserlistofvalueslink as shared_links_getuserlistofvalueslink
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UserListOfValuesResponseLinks:
    
    self_: Optional[shared_links_getuserlistofvalueslink.LinksGetUserListOfValuesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('self'), 'exclude': lambda f: f is None }})  
    