"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import range as shared_range
from ..shared import roleuser as shared_roleuser
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RoleUserList:
    r"""List of users with assigned role"""
    
    items: list[shared_roleuser.RoleUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('items') }})
    r"""List of role-user mappings"""  
    range: shared_range.Range = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('range') }})
    r"""Range information"""  
    