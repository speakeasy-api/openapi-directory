import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class KinesisStreamsOutputUpdate:
    r"""KinesisStreamsOutputUpdate
    When you update a SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about a Kinesis data stream that is configured as the destination.
    """
    
    resource_arn_update: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARNUpdate') }})
    
