import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcegroupstate_enum as shared_resourcegroupstate_enum


@dataclass_json
@dataclasses.dataclass
class ResourceGroup:
    r"""ResourceGroup
    The information about the resource group integration.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    state: Optional[shared_resourcegroupstate_enum.ResourceGroupStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
