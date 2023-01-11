import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conflictdetectiontype_enum as shared_conflictdetectiontype_enum
from ..shared import conflicthandlertype_enum as shared_conflicthandlertype_enum
from ..shared import lambdaconflicthandlerconfig as shared_lambdaconflicthandlerconfig


@dataclass_json
@dataclasses.dataclass
class SyncConfig:
    r"""SyncConfig
    <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
    """
    
    conflict_detection: Optional[shared_conflictdetectiontype_enum.ConflictDetectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictDetection') }})
    conflict_handler: Optional[shared_conflicthandlertype_enum.ConflictHandlerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictHandler') }})
    lambda_conflict_handler_config: Optional[shared_lambdaconflicthandlerconfig.LambdaConflictHandlerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConflictHandlerConfig') }})
    
