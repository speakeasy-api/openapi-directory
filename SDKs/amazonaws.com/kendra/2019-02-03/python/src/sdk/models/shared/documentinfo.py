"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import documentattribute as shared_documentattribute
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DocumentInfo:
    r"""Identifies a document for which to retrieve status information"""
    
    document_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DocumentId') }})  
    attributes: Optional[list[shared_documentattribute.DocumentAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Attributes'), 'exclude': lambda f: f is None }})  
    