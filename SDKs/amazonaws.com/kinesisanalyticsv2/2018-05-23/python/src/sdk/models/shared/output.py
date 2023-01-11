import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationschema as shared_destinationschema
from ..shared import kinesisfirehoseoutput as shared_kinesisfirehoseoutput
from ..shared import kinesisstreamsoutput as shared_kinesisstreamsoutput
from ..shared import lambdaoutput as shared_lambdaoutput


@dataclass_json
@dataclasses.dataclass
class Output:
    r"""Output
    <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
    """
    
    destination_schema: shared_destinationschema.DestinationSchema = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSchema') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    kinesis_firehose_output: Optional[shared_kinesisfirehoseoutput.KinesisFirehoseOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseOutput') }})
    kinesis_streams_output: Optional[shared_kinesisstreamsoutput.KinesisStreamsOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsOutput') }})
    lambda_output: Optional[shared_lambdaoutput.LambdaOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaOutput') }})
    
