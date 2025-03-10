"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import filterfield_enum as shared_filterfield_enum
from ..shared import filteroperator_enum as shared_filteroperator_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Filter:
    r"""A search filter."""
    
    field: shared_filterfield_enum.FilterFieldEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('field') }})  
    operator: shared_filteroperator_enum.FilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('operator') }})  
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('value') }})  
    