"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import unprocessedaccount as shared_unprocessedaccount
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateInvitationsResponse:
    r"""Success"""
    
    unprocessed_accounts: Optional[list[shared_unprocessedaccount.UnprocessedAccount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unprocessedAccounts'), 'exclude': lambda f: f is None }})  
    