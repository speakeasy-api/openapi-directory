import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationnodetype_enum as shared_organizationnodetype_enum


@dataclass_json
@dataclasses.dataclass
class OrganizationNode:
    r"""OrganizationNode
    Information about the organization node.
    """
    
    type: Optional[shared_organizationnodetype_enum.OrganizationNodeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
