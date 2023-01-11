import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputparallelism as shared_inputparallelism
from ..shared import inputprocessingconfiguration as shared_inputprocessingconfiguration
from ..shared import sourceschema as shared_sourceschema
from ..shared import kinesisfirehoseinput as shared_kinesisfirehoseinput
from ..shared import kinesisstreamsinput as shared_kinesisstreamsinput


@dataclass_json
@dataclasses.dataclass
class Input:
    r"""Input
    When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. 
    """
    
    input_schema: shared_sourceschema.SourceSchema = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSchema') }})
    name_prefix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamePrefix') }})
    input_parallelism: Optional[shared_inputparallelism.InputParallelism] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParallelism') }})
    input_processing_configuration: Optional[shared_inputprocessingconfiguration.InputProcessingConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfiguration') }})
    kinesis_firehose_input: Optional[shared_kinesisfirehoseinput.KinesisFirehoseInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseInput') }})
    kinesis_streams_input: Optional[shared_kinesisstreamsinput.KinesisStreamsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsInput') }})
    
