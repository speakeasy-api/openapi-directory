import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sharditeratortype_enum as shared_sharditeratortype_enum


@dataclass_json
@dataclasses.dataclass
class GetShardIteratorInput:
    r"""GetShardIteratorInput
    Represents the input for <code>GetShardIterator</code>.
    """
    
    shard_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardId') }})
    shard_iterator_type: shared_sharditeratortype_enum.ShardIteratorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShardIteratorType') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    starting_sequence_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingSequenceNumber') }})
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
