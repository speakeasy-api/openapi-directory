"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import accountmodification as shared_accountmodification
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeAccountModificationsResult:
    r"""Success"""
    
    account_modifications: Optional[list[shared_accountmodification.AccountModification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AccountModifications'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NextToken'), 'exclude': lambda f: f is None }})  
    