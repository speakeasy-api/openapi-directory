"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import generatedcodejobdetails as shared_generatedcodejobdetails
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetGeneratedCodeJobResult:
    r"""Success"""
    
    generated_code_job: Optional[shared_generatedcodejobdetails.GeneratedCodeJobDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GeneratedCodeJob'), 'exclude': lambda f: f is None }})  
    