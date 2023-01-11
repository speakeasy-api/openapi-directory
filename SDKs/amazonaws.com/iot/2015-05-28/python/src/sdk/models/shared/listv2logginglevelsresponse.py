import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logtargetconfiguration as shared_logtargetconfiguration


@dataclass_json
@dataclasses.dataclass
class ListV2LoggingLevelsResponse:
    log_target_configurations: Optional[list[shared_logtargetconfiguration.LogTargetConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logTargetConfigurations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
