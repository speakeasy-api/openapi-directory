import dataclasses
from typing import Optional
from enum import Enum
from ..shared import activitystreammode_enum as shared_activitystreammode_enum
from ..shared import activitystreamstatus_enum as shared_activitystreamstatus_enum


@dataclasses.dataclass
class StartActivityStreamResponse:
    apply_immediately: Optional[bool] = dataclasses.field(default=None)
    engine_native_audit_fields_included: Optional[bool] = dataclasses.field(default=None)
    kinesis_stream_name: Optional[str] = dataclasses.field(default=None)
    kms_key_id: Optional[str] = dataclasses.field(default=None)
    mode: Optional[shared_activitystreammode_enum.ActivityStreamModeEnum] = dataclasses.field(default=None)
    status: Optional[shared_activitystreamstatus_enum.ActivityStreamStatusEnum] = dataclasses.field(default=None)
    
