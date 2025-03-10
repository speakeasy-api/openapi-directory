"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import templateversionstatus_enum as shared_templateversionstatus_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateEnvironmentTemplateVersionInput:
    
    major_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('majorVersion') }})  
    minor_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('minorVersion') }})  
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('templateName') }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})  
    status: Optional[shared_templateversionstatus_enum.TemplateVersionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    