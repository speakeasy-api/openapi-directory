"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CorporateTaxDeclarationOrderEnum(str, Enum):
    ONEST_ADVANCE = '1st advance'
    TWOND_ADVANCE = '2nd advance'
    THREERD_ADVANCE = '3rd advance'
    FOURTH_ADVANCE = '4th advance'
    REGULARIZATION = 'regularization'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CorporateTaxDeclaration:
    
    amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Amount'), 'exclude': lambda f: f is None }})  
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Author'), 'exclude': lambda f: f is None }})  
    class_: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Class'), 'exclude': lambda f: f is None }})  
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Code'), 'exclude': lambda f: f is None }})  
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Comment'), 'exclude': lambda f: f is None }})  
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Date'), 'exclude': lambda f: f is None }})  
    declaration_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DeclarationDate'), 'exclude': lambda f: f is None }})  
    extension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Extension'), 'exclude': lambda f: f is None }})  
    folder_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FolderDate'), 'exclude': lambda f: f is None }})  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Id'), 'exclude': lambda f: f is None }})  
    order: Optional[CorporateTaxDeclarationOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Order'), 'exclude': lambda f: f is None }})  
    rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Rate'), 'exclude': lambda f: f is None }})  
    tax_base: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TaxBase'), 'exclude': lambda f: f is None }})  
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Title'), 'exclude': lambda f: f is None }})  
    