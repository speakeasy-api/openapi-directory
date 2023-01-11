import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputprocessingconfiguration as shared_inputprocessingconfiguration


@dataclass_json
@dataclasses.dataclass
class AddApplicationInputProcessingConfigurationRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    current_application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    input_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputId') }})
    input_processing_configuration: shared_inputprocessingconfiguration.InputProcessingConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfiguration') }})
    
