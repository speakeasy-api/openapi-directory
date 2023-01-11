import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loggingconfiguration as shared_loggingconfiguration


@dataclass_json
@dataclasses.dataclass
class PutLoggingConfigurationRequest:
    logging_configuration: shared_loggingconfiguration.LoggingConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoggingConfiguration') }})
    
