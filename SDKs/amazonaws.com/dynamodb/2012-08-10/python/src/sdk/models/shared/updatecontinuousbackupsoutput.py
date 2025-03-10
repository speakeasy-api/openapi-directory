"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import continuousbackupsdescription as shared_continuousbackupsdescription
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateContinuousBackupsOutput:
    r"""Success"""
    
    continuous_backups_description: Optional[shared_continuousbackupsdescription.ContinuousBackupsDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ContinuousBackupsDescription'), 'exclude': lambda f: f is None }})  
    