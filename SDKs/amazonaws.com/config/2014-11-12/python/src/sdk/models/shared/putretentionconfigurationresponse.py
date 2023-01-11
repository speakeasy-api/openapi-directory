import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import retentionconfiguration as shared_retentionconfiguration


@dataclass_json
@dataclasses.dataclass
class PutRetentionConfigurationResponse:
    retention_configuration: Optional[shared_retentionconfiguration.RetentionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionConfiguration') }})
    
