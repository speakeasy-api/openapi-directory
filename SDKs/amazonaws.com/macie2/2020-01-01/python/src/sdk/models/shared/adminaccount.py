import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adminstatus_enum as shared_adminstatus_enum


@dataclass_json
@dataclasses.dataclass
class AdminAccount:
    r"""AdminAccount
    Provides information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    status: Optional[shared_adminstatus_enum.AdminStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
