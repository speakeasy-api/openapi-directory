"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class PrivateCollectionSearchOrderEnum(str, Enum):
    r"""The field by which to order."""
    PUBLISHED_DATE = 'published_date'
    MODIFIED_DATE = 'modified_date'
    VIEWS = 'views'
    SHARES = 'shares'
    CITES = 'cites'

class PrivateCollectionSearchOrderDirectionEnum(str, Enum):
    r"""Direction of ordering"""
    ASC = 'asc'
    DESC = 'desc'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PrivateCollectionSearch:
    r"""Search Parameters"""
    
    doi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('doi'), 'exclude': lambda f: f is None }})
    r"""Only return collections with this doi"""  
    group: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('group'), 'exclude': lambda f: f is None }})
    r"""only return collections from this group"""  
    handle: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('handle'), 'exclude': lambda f: f is None }})
    r"""Only return collections with this handle"""  
    institution: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('institution'), 'exclude': lambda f: f is None }})
    r"""only return collections from this institution"""  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('limit'), 'exclude': lambda f: f is None }})
    r"""Number of results included on a page. Used for pagination with query"""  
    modified_since: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('modified_since'), 'exclude': lambda f: f is None }})
    r"""Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD"""  
    offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('offset'), 'exclude': lambda f: f is None }})
    r"""Where to start the listing(the offset of the first result). Used for pagination with limit"""  
    order: Optional[PrivateCollectionSearchOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('order'), 'exclude': lambda f: f is None }})
    r"""The field by which to order."""  
    order_direction: Optional[PrivateCollectionSearchOrderDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('order_direction'), 'exclude': lambda f: f is None }})
    r"""Direction of ordering"""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page'), 'exclude': lambda f: f is None }})
    r"""Page number. Used for pagination with page_size"""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('page_size'), 'exclude': lambda f: f is None }})
    r"""The number of results included on a page. Used for pagination with page"""  
    published_since: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('published_since'), 'exclude': lambda f: f is None }})
    r"""Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD"""  
    resource_doi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resource_doi'), 'exclude': lambda f: f is None }})
    r"""Only return collections with this resource_doi"""  
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resource_id'), 'exclude': lambda f: f is None }})
    r"""only return collections with this resource_id"""  
    search_for: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('search_for'), 'exclude': lambda f: f is None }})
    r"""Search term"""  
    