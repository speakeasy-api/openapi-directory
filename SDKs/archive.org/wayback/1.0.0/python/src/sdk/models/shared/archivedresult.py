"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import snapshot as shared_snapshot
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ArchivedResult:
    
    snapshot: shared_snapshot.Snapshot = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('snapshot') }})  
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timestamp') }})
    r"""The _intepreted_ timestamp requested, in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format"""  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})
    r"""The URL requested"""  
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tag'), 'exclude': lambda f: f is None }})
    r"""The user-supplied tag for use in collation"""  
    