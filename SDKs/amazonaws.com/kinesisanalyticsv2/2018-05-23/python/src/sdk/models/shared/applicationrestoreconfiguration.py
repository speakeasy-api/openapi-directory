import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applicationrestoretype_enum as shared_applicationrestoretype_enum


@dataclass_json
@dataclasses.dataclass
class ApplicationRestoreConfiguration:
    r"""ApplicationRestoreConfiguration
    Specifies the method and snapshot to use when restarting an application using previously saved application state.
    """
    
    application_restore_type: shared_applicationrestoretype_enum.ApplicationRestoreTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationRestoreType') }})
    snapshot_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotName') }})
    
