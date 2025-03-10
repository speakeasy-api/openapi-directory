"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import orderby_enum as shared_orderby_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeLogStreamsRequest:
    
    descending: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('descending'), 'exclude': lambda f: f is None }})  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('limit'), 'exclude': lambda f: f is None }})  
    log_group_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('logGroupIdentifier'), 'exclude': lambda f: f is None }})  
    log_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('logGroupName'), 'exclude': lambda f: f is None }})  
    log_stream_name_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('logStreamNamePrefix'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextToken'), 'exclude': lambda f: f is None }})  
    order_by: Optional[shared_orderby_enum.OrderByEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('orderBy'), 'exclude': lambda f: f is None }})  
    