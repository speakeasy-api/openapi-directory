"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import clientauthenticationtype_enum as shared_clientauthenticationtype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeClientAuthenticationSettingsRequest:
    
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DirectoryId') }})  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Limit'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NextToken'), 'exclude': lambda f: f is None }})  
    type: Optional[shared_clientauthenticationtype_enum.ClientAuthenticationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Type'), 'exclude': lambda f: f is None }})  
    