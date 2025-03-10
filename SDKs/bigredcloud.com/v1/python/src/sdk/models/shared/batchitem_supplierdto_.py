"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import supplierdto as shared_supplierdto
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class BatchItemSupplierDtoOpCodeEnum(str, Enum):
    r"""1 - Create
    2 - Update
    3 - Delete
    """
    ONE = '1'
    TWO = '2'
    THREE = '3'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class BatchItemSupplierDto:
    
    item: Optional[shared_supplierdto.SupplierDto] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('item'), 'exclude': lambda f: f is None }})  
    op_code: Optional[BatchItemSupplierDtoOpCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('opCode'), 'exclude': lambda f: f is None }})
    r"""1 - Create
    2 - Update
    3 - Delete
    """  
    