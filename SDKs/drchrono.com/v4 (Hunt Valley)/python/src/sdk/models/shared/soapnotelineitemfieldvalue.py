"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SoapNoteLineItemFieldValue:
    r"""Values entered by doctor when charting a particular appointment"""
    
    appointment: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('appointment') }})
    r"""ID of appointment that the value applies to"""  
    clinical_note_field: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('clinical_note_field') }})
    r"""ID of `/api/clinical_note_field_types` object that indicates type of the value"""  
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('value') }})
    r"""Value of the field. Interpretation varies by field type.
    `clinical_note_field.data_type` | Value | Description
    ------------------------------- | ----- | -----------
    `\"Header\"` | string | 
    `\"SubHeader\"` | string |
    `\"String\"` | string | If field is single/multiple select field, make sure value presents in allowed values set.
    `\"TwoStrings\"` | string | String is seperated by `\"/\"`
    `\"NullCheckbox\"` | string | Can be `\"0\"`, `\"1\"`, `\"2\"`, `\"0\"`-`Not selected`, `\"1\"`-`No`, `\"2\"`-`Yes`
    `\"Checkbox\"` | string | Can be `\"True\"`, `\"False\"`
    """  
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'exclude': lambda f: f is None }})  
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})  
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updated_at'), 'exclude': lambda f: f is None }})  
    