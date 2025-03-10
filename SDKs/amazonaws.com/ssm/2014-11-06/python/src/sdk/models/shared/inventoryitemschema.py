"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import inventoryitemattribute as shared_inventoryitemattribute
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InventoryItemSchema:
    r"""The inventory item schema definition. Users can use this to compose inventory query filters."""
    
    attributes: list[shared_inventoryitemattribute.InventoryItemAttribute] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Attributes') }})  
    type_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TypeName') }})  
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DisplayName'), 'exclude': lambda f: f is None }})  
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Version'), 'exclude': lambda f: f is None }})  
    