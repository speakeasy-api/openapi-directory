import dataclasses
from typing import Optional
from enum import Enum
from ..shared import activitystreamstatus_enum as shared_activitystreamstatus_enum


@dataclasses.dataclass
class StopActivityStreamResponse:
    kinesis_stream_name: Optional[str] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_activitystreamstatus_enum.ActivityStreamStatusEnum] = dataclasses.field(default=None)
    
