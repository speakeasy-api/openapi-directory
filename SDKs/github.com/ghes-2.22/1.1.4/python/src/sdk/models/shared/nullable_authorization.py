"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import nullable_scoped_installation as shared_nullable_scoped_installation
from ..shared import nullable_simple_user as shared_nullable_simple_user
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NullableAuthorizationApp:
    
    client_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('client_id') }})  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NullableAuthorization:
    r"""The authorization for an OAuth app, GitHub App, or a Personal Access Token."""
    
    app: NullableAuthorizationApp = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('app') }})  
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    fingerprint: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fingerprint') }})  
    hashed_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('hashed_token') }})  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})  
    note: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('note') }})  
    note_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('note_url') }})  
    scopes: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scopes') }})
    r"""A list of scopes that this authorization is in."""  
    token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('token') }})  
    token_last_eight: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('token_last_eight') }})  
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    installation: Optional[shared_nullable_scoped_installation.NullableScopedInstallation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('installation'), 'exclude': lambda f: f is None }})  
    user: Optional[shared_nullable_simple_user.NullableSimpleUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('user'), 'exclude': lambda f: f is None }})
    r"""Simple User"""  
    