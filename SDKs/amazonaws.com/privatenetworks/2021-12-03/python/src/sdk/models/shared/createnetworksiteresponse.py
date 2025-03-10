"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import networksite as shared_networksite
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateNetworkSiteResponse:
    r"""Success"""
    
    network_site: Optional[shared_networksite.NetworkSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('networkSite'), 'exclude': lambda f: f is None }})  
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tags'), 'exclude': lambda f: f is None }})  
    