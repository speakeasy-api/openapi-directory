import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectiontype_enum as shared_connectiontype_enum
from ..shared import environmentlifecycle as shared_environmentlifecycle
from ..shared import managedcredentialsstatus_enum as shared_managedcredentialsstatus_enum
from ..shared import environmenttype_enum as shared_environmenttype_enum


@dataclass_json
@dataclasses.dataclass
class Environment:
    r"""Environment
    Information about an Cloud9 development environment.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    owner_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerArn') }})
    type: shared_environmenttype_enum.EnvironmentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    connection_type: Optional[shared_connectiontype_enum.ConnectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lifecycle: Optional[shared_environmentlifecycle.EnvironmentLifecycle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycle') }})
    managed_credentials_status: Optional[shared_managedcredentialsstatus_enum.ManagedCredentialsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCredentialsStatus') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
