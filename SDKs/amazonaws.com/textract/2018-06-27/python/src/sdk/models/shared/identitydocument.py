"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import block as shared_block
from ..shared import identitydocumentfield as shared_identitydocumentfield
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class IdentityDocument:
    r"""The structure that lists each document processed in an AnalyzeID operation."""
    
    blocks: Optional[list[shared_block.Block]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Blocks'), 'exclude': lambda f: f is None }})  
    document_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DocumentIndex'), 'exclude': lambda f: f is None }})  
    identity_document_fields: Optional[list[shared_identitydocumentfield.IdentityDocumentField]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('IdentityDocumentFields'), 'exclude': lambda f: f is None }})  
    