"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Group:
    
    association_criteria: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('association_criteria') }})
    r"""HR code associated with group, if code exists"""  
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""Group id"""  
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name') }})
    r"""Group name"""  
    parent_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('parent_id') }})
    r"""Parent group if any"""  
    resource_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resource_id') }})
    r"""Group resource id"""  
    