"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import viasname as shared_viasname
from ..shared import viaspersonaldata as shared_viaspersonaldata
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class IndividualDetails:
    
    name: Optional[shared_viasname.ViasName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})  
    personal_data: Optional[shared_viaspersonaldata.ViasPersonalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('personalData'), 'exclude': lambda f: f is None }})  
    