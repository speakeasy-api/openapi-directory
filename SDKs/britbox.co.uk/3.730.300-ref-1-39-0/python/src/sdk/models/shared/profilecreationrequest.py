"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProfileCreationRequest:
    r"""Profile details."""
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""The unique name of the profile."""  
    language_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('languageCode'), 'exclude': lambda f: f is None }})
    r"""The code of the preferred language for the profile.
    Must be a valid ISO language code e.g. \"en-US\" and must match the code of
    one of the languages specified in the app config.
    See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    """  
    pin_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pinEnabled'), 'exclude': lambda f: f is None }})
    r"""Whether an account pin is required to enter the profile.
    
    If no account pin is defined this has no impact.
    """  
    purchase_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('purchaseEnabled'), 'exclude': lambda f: f is None }})
    r"""Whether the profile can make purchases with the account payment options."""  
    segments: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('segments'), 'exclude': lambda f: f is None }})
    r"""The segments a profile should be placed under"""  
    