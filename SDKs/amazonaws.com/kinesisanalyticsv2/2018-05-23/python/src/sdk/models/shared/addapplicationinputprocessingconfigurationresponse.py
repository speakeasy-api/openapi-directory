import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputprocessingconfigurationdescription as shared_inputprocessingconfigurationdescription


@dataclass_json
@dataclasses.dataclass
class AddApplicationInputProcessingConfigurationResponse:
    application_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationARN') }})
    application_version_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationVersionId') }})
    input_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputId') }})
    input_processing_configuration_description: Optional[shared_inputprocessingconfigurationdescription.InputProcessingConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfigurationDescription') }})
    
