import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationschema as shared_destinationschema
from ..shared import kinesisfirehoseoutputupdate as shared_kinesisfirehoseoutputupdate
from ..shared import kinesisstreamsoutputupdate as shared_kinesisstreamsoutputupdate
from ..shared import lambdaoutputupdate as shared_lambdaoutputupdate


@dataclass_json
@dataclasses.dataclass
class OutputUpdate:
    r"""OutputUpdate
     Describes updates to the output configuration identified by the <code>OutputId</code>. 
    """
    
    output_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputId') }})
    destination_schema_update: Optional[shared_destinationschema.DestinationSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSchemaUpdate') }})
    kinesis_firehose_output_update: Optional[shared_kinesisfirehoseoutputupdate.KinesisFirehoseOutputUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseOutputUpdate') }})
    kinesis_streams_output_update: Optional[shared_kinesisstreamsoutputupdate.KinesisStreamsOutputUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsOutputUpdate') }})
    lambda_output_update: Optional[shared_lambdaoutputupdate.LambdaOutputUpdate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaOutputUpdate') }})
    name_update: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NameUpdate') }})
    
