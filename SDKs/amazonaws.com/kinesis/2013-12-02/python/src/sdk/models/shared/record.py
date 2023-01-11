import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptiontype_enum as shared_encryptiontype_enum


@dataclass_json
@dataclasses.dataclass
class Record:
    r"""Record
    The unit of data of the Kinesis data stream, which is composed of a sequence number, a partition key, and a data blob.
    """
    
    data: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    partition_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartitionKey') }})
    sequence_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumber') }})
    approximate_arrival_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApproximateArrivalTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encryption_type: Optional[shared_encryptiontype_enum.EncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    
