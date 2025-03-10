"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentIDRequestBody:
    r"""An expense report to modify"""
    
    before_vat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BeforeVAT'), 'exclude': lambda f: f is None }})  
    expense_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ExpenseDate'), 'exclude': lambda f: f is None }})  
    incl_vat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InclVAT'), 'exclude': lambda f: f is None }})  
    processing_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessingDate'), 'exclude': lambda f: f is None }})  
    vat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('VAT'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentIDRequest:
    
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    r"""Id of the document"""  
    folder_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    r"""Id of the folder"""  
    space_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    r"""Id of the space"""  
    request_body: Optional[PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    r"""An expense report to modify"""  
    

@dataclasses.dataclass
class PatchSpacesSpaceIDFoldersFolderIDExpenseReportsDocumentIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    