"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import querystatestring_enum as shared_querystatestring_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetQueryStateResponse:
    r"""A structure for the output."""
    
    state: shared_querystatestring_enum.QueryStateStringEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('State') }})  
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Error'), 'exclude': lambda f: f is None }})  
    