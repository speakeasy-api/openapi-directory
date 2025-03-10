"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CollaboratorPermissions:
    
    admin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('admin') }})  
    pull: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pull') }})  
    push: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('push') }})  
    maintain: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maintain'), 'exclude': lambda f: f is None }})  
    triage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('triage'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Collaborator:
    r"""Collaborator"""
    
    avatar_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('avatar_url') }})  
    events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('events_url') }})  
    followers_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('followers_url') }})  
    following_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('following_url') }})  
    gists_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gists_url') }})  
    gravatar_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gravatar_id') }})  
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('html_url') }})  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})  
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('login') }})  
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('node_id') }})  
    organizations_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('organizations_url') }})  
    received_events_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('received_events_url') }})  
    repos_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('repos_url') }})  
    site_admin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('site_admin') }})  
    starred_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('starred_url') }})  
    subscriptions_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subscriptions_url') }})  
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})  
    permissions: Optional[CollaboratorPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('permissions'), 'exclude': lambda f: f is None }})  
    