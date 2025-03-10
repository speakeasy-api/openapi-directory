"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import reaction_rollup as shared_reaction_rollup
from ..shared import release_asset as shared_release_asset
from ..shared import simple_user as shared_simple_user
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Release:
    r"""A release."""
    
    assets: list[shared_release_asset.ReleaseAsset] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('assets') }})  
    assets_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('assets_url') }})  
    author: shared_simple_user.SimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('author') }})
    r"""Simple User"""  
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    draft: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('draft') }})
    r"""true to create a draft (unpublished) release, false to create a published one."""  
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('html_url') }})  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})  
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('node_id') }})  
    prerelease: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('prerelease') }})
    r"""Whether to identify the release as a prerelease or a full release."""  
    published_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('published_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    tag_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tag_name') }})
    r"""The name of the tag."""  
    tarball_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tarball_url') }})  
    target_commitish: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('target_commitish') }})
    r"""Specifies the commitish value that determines where the Git tag is created from."""  
    upload_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('upload_url') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    zipball_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('zipball_url') }})  
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('body'), 'exclude': lambda f: f is None }})  
    body_html: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('body_html'), 'exclude': lambda f: f is None }})  
    body_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('body_text'), 'exclude': lambda f: f is None }})  
    reactions: Optional[shared_reaction_rollup.ReactionRollup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reactions'), 'exclude': lambda f: f is None }})  
    