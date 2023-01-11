import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import consumerstatus_enum as shared_consumerstatus_enum


@dataclass_json
@dataclasses.dataclass
class ConsumerDescription:
    r"""ConsumerDescription
    An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.
    """
    
    consumer_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerARN') }})
    consumer_creation_timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerCreationTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consumer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerName') }})
    consumer_status: shared_consumerstatus_enum.ConsumerStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerStatus') }})
    stream_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    
