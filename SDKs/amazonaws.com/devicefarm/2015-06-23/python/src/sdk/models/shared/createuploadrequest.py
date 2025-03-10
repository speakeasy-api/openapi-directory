"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import uploadtype_enum as shared_uploadtype_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateUploadRequest:
    r"""Represents a request to the create upload operation."""
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})  
    project_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('projectArn') }})  
    type: shared_uploadtype_enum.UploadTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type') }})  
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contentType'), 'exclude': lambda f: f is None }})  
    