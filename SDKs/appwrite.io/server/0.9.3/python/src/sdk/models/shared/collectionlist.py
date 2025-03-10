"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import collection as shared_collection
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CollectionList:
    r"""Collections List"""
    
    collections: list[shared_collection.Collection] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('collections') }})
    r"""List of collections."""  
    sum: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sum') }})
    r"""Total sum of items in the list."""  
    