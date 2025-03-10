"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils

class AccountTokenByCodeRequestScopesEnum(str, Enum):
    CATALOG = 'Catalog'
    COMMERCE = 'Commerce'
    SETTINGS = 'Settings'
    PLAYBACK = 'Playback'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AccountTokenByCodeRequest:
    r"""The device id e.g. serial number and authorization code."""
    
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code') }})
    r"""The generated device authorization code."""  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The unique identifier for the device e.g. serial number."""  
    scopes: list[AccountTokenByCodeRequestScopesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scopes') }})
    r"""The scope(s) of the token(s) required."""  
    