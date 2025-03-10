"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import exportdescription as shared_exportdescription
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DescribeExportOutput:
    r"""Success"""
    
    export_description: Optional[shared_exportdescription.ExportDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ExportDescription'), 'exclude': lambda f: f is None }})  
    