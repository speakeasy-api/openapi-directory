"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import passwordpolicytype as shared_passwordpolicytype
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UserPoolPolicyType:
    r"""The policy associated with a user pool."""
    
    password_policy: Optional[shared_passwordpolicytype.PasswordPolicyType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PasswordPolicy'), 'exclude': lambda f: f is None }})  
    