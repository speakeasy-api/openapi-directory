import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationschema as shared_destinationschema
from ..shared import kinesisfirehoseoutputdescription as shared_kinesisfirehoseoutputdescription
from ..shared import kinesisstreamsoutputdescription as shared_kinesisstreamsoutputdescription
from ..shared import lambdaoutputdescription as shared_lambdaoutputdescription


@dataclass_json
@dataclasses.dataclass
class OutputDescription:
    r"""OutputDescription
    For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. 
    """
    
    destination_schema: Optional[shared_destinationschema.DestinationSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSchema') }})
    kinesis_firehose_output_description: Optional[shared_kinesisfirehoseoutputdescription.KinesisFirehoseOutputDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseOutputDescription') }})
    kinesis_streams_output_description: Optional[shared_kinesisstreamsoutputdescription.KinesisStreamsOutputDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsOutputDescription') }})
    lambda_output_description: Optional[shared_lambdaoutputdescription.LambdaOutputDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaOutputDescription') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputId') }})
    
