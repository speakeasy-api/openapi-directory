"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AccessMode:
    r"""An object defining what a not-logged-in visitor can do with the share contents"""
    
    delete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('delete'), 'exclude': lambda f: f is None }})
    r"""Whether share allows visitors to delete contents"""  
    download: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('download'), 'exclude': lambda f: f is None }})
    r"""Whether share allows visitors to download"""  
    modify: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('modify'), 'exclude': lambda f: f is None }})
    r"""Whether share allows visitors to rename or move contents."""  
    upload: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('upload'), 'exclude': lambda f: f is None }})
    r"""Whether share allows visitors to upload"""  
    