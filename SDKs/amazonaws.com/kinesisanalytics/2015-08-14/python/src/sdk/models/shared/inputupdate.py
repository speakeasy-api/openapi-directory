import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inputparallelismupdate as shared_inputparallelismupdate
from ..shared import inputprocessingconfigurationupdate as shared_inputprocessingconfigurationupdate
from ..shared import inputschemaupdate as shared_inputschemaupdate
from ..shared import kinesisfirehoseinputupdate as shared_kinesisfirehoseinputupdate
from ..shared import kinesisstreamsinputupdate as shared_kinesisstreamsinputupdate


@dataclass_json
@dataclasses.dataclass
class InputUpdate:
    r"""InputUpdate
    Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). 
    """
    
    input_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputId') }})
    input_parallelism_update: Optional[shared_inputparallelismupdate.InputParallelismUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParallelismUpdate') }})
    input_processing_configuration_update: Optional[shared_inputprocessingconfigurationupdate.InputProcessingConfigurationUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfigurationUpdate') }})
    input_schema_update: Optional[shared_inputschemaupdate.InputSchemaUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSchemaUpdate') }})
    kinesis_firehose_input_update: Optional[shared_kinesisfirehoseinputupdate.KinesisFirehoseInputUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseInputUpdate') }})
    kinesis_streams_input_update: Optional[shared_kinesisstreamsinputupdate.KinesisStreamsInputUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsInputUpdate') }})
    name_prefix_update: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamePrefixUpdate') }})
    
