import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lftag as shared_lftag
from ..shared import resourcetype_enum as shared_resourcetype_enum


@dataclass_json
@dataclasses.dataclass
class LfTagPolicyResource:
    r"""LfTagPolicyResource
    A structure containing a list of tag conditions that apply to a resource's tag policy.
    """
    
    expression: list[shared_lftag.LfTag] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    resource_type: shared_resourcetype_enum.ResourceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
