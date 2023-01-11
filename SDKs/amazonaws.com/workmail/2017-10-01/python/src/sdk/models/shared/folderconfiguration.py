import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retentionaction_enum as shared_retentionaction_enum
from ..shared import foldername_enum as shared_foldername_enum


@dataclass_json
@dataclasses.dataclass
class FolderConfiguration:
    r"""FolderConfiguration
    The configuration applied to an organization's folders by its retention policy.
    """
    
    action: shared_retentionaction_enum.RetentionActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    name: shared_foldername_enum.FolderNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    period: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Period') }})
    
