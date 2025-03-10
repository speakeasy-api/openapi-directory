"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import autorenew_enum as shared_autorenew_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateSubscriptionRequest:
    
    auto_renew: Optional[shared_autorenew_enum.AutoRenewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AutoRenew'), 'exclude': lambda f: f is None }})  
    