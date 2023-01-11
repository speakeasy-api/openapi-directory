import dataclasses
from typing import Optional
from ..shared import snapshotschedulelist as shared_snapshotschedulelist


@dataclasses.dataclass
class DescribeSnapshotSchedulesOutputMessage:
    marker: Optional[str] = dataclasses.field(default=None)
    snapshot_schedules: Optional[list[shared_snapshotschedulelist.SnapshotScheduleList]] = dataclasses.field(default=None)
    
