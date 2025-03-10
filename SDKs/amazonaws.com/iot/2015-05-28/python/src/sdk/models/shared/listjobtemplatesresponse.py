"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import jobtemplatesummary as shared_jobtemplatesummary
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ListJobTemplatesResponse:
    r"""Success"""
    
    job_templates: Optional[list[shared_jobtemplatesummary.JobTemplateSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jobTemplates'), 'exclude': lambda f: f is None }})  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nextToken'), 'exclude': lambda f: f is None }})  
    