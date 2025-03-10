"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import issue as shared_issue
from ..shared import simple_user as shared_simple_user
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TimelineCrossReferencedEventSource:
    
    issue: Optional[shared_issue.Issue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('issue'), 'exclude': lambda f: f is None }})
    r"""Issues are a great way to keep track of tasks, enhancements, and bugs for your projects."""  
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TimelineCrossReferencedEvent:
    r"""Timeline Cross Referenced Event"""
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    event: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('event') }})  
    source: TimelineCrossReferencedEventSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('source') }})  
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})  
    actor: Optional[shared_simple_user.SimpleUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('actor'), 'exclude': lambda f: f is None }})
    r"""Simple User"""  
    