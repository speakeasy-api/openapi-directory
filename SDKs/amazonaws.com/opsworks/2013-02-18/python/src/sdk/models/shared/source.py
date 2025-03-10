"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import sourcetype_enum as shared_sourcetype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Source:
    r"""Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href=\\"https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html\\">Creating Apps</a> or <a href=\\"https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html\\">Custom Recipes and Cookbooks</a>."""
    
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Password'), 'exclude': lambda f: f is None }})  
    revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Revision'), 'exclude': lambda f: f is None }})  
    ssh_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SshKey'), 'exclude': lambda f: f is None }})  
    type: Optional[shared_sourcetype_enum.SourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Type'), 'exclude': lambda f: f is None }})  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Url'), 'exclude': lambda f: f is None }})  
    username: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Username'), 'exclude': lambda f: f is None }})  
    