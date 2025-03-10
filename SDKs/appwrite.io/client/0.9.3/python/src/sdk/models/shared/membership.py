"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Membership:
    r"""Membership"""
    
    dollar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('$id') }})
    r"""Membership ID."""  
    confirm: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('confirm') }})
    r"""User confirmation status, true if the user has joined the team or false otherwise."""  
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email') }})
    r"""User email address."""  
    invited: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('invited') }})
    r"""Date, the user has been invited to join the team in Unix timestamp."""  
    joined: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('joined') }})
    r"""Date, the user has accepted the invitation to join the team in Unix timestamp."""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""User name."""  
    roles: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('roles') }})
    r"""User list of roles"""  
    team_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('teamId') }})
    r"""Team ID."""  
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('userId') }})
    r"""User ID."""  
    