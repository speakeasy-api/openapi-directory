import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptiontype_enum as shared_encryptiontype_enum
from ..shared import enhancedmetrics as shared_enhancedmetrics
from ..shared import streamstatus_enum as shared_streamstatus_enum


@dataclass_json
@dataclasses.dataclass
class StreamDescriptionSummary:
    r"""StreamDescriptionSummary
    Represents the output for <a>DescribeStreamSummary</a> 
    """
    
    enhanced_monitoring: list[shared_enhancedmetrics.EnhancedMetrics] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnhancedMonitoring') }})
    open_shard_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenShardCount') }})
    retention_period_hours: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetentionPeriodHours') }})
    stream_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_creation_timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamCreationTimestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stream_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    stream_status: shared_streamstatus_enum.StreamStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamStatus') }})
    consumer_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerCount') }})
    encryption_type: Optional[shared_encryptiontype_enum.EncryptionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionType') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    
