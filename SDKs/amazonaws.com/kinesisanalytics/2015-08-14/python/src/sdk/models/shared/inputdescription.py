import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputparallelism as shared_inputparallelism
from ..shared import inputprocessingconfigurationdescription as shared_inputprocessingconfigurationdescription
from ..shared import sourceschema as shared_sourceschema
from ..shared import inputstartingpositionconfiguration as shared_inputstartingpositionconfiguration
from ..shared import kinesisfirehoseinputdescription as shared_kinesisfirehoseinputdescription
from ..shared import kinesisstreamsinputdescription as shared_kinesisstreamsinputdescription


@dataclass_json
@dataclasses.dataclass
class InputDescription:
    r"""InputDescription
    Describes the application input configuration. For more information, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html\">Configuring Application Input</a>. 
    """
    
    in_app_stream_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppStreamNames') }})
    input_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputId') }})
    input_parallelism: Optional[shared_inputparallelism.InputParallelism] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParallelism') }})
    input_processing_configuration_description: Optional[shared_inputprocessingconfigurationdescription.InputProcessingConfigurationDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfigurationDescription') }})
    input_schema: Optional[shared_sourceschema.SourceSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSchema') }})
    input_starting_position_configuration: Optional[shared_inputstartingpositionconfiguration.InputStartingPositionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPositionConfiguration') }})
    kinesis_firehose_input_description: Optional[shared_kinesisfirehoseinputdescription.KinesisFirehoseInputDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseInputDescription') }})
    kinesis_streams_input_description: Optional[shared_kinesisstreamsinputdescription.KinesisStreamsInputDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsInputDescription') }})
    name_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamePrefix') }})
    
