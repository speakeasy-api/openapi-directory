"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class TaskCompactResourceSubtypeEnum(str, Enum):
    r"""The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
    The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
    """
    DEFAULT_TASK = 'default_task'
    MILESTONE = 'milestone'
    SECTION = 'section'
    APPROVAL = 'approval'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TaskCompact:
    r"""The *task* is the basic object around which many operations in Asana are centered."""
    
    gid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gid'), 'exclude': lambda f: f is None }})
    r"""Globally unique identifier of the resource, as a string."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The name of the task."""  
    resource_subtype: Optional[TaskCompactResourceSubtypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resource_subtype'), 'exclude': lambda f: f is None }})
    r"""The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
    The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
    """  
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('resource_type'), 'exclude': lambda f: f is None }})
    r"""The base type of this resource."""  
    