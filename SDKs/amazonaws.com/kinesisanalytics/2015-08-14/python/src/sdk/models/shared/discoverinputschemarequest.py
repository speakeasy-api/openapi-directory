import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputprocessingconfiguration as shared_inputprocessingconfiguration
from ..shared import inputstartingpositionconfiguration as shared_inputstartingpositionconfiguration
from ..shared import s3configuration as shared_s3configuration


@dataclass_json
@dataclasses.dataclass
class DiscoverInputSchemaRequest:
    input_processing_configuration: Optional[shared_inputprocessingconfiguration.InputProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfiguration') }})
    input_starting_position_configuration: Optional[shared_inputstartingpositionconfiguration.InputStartingPositionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPositionConfiguration') }})
    resource_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    s3_configuration: Optional[shared_s3configuration.S3Configuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    
