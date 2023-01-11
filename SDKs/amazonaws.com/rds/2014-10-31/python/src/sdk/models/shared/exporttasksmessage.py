import dataclasses
from typing import Optional
from ..shared import exporttaskslist as shared_exporttaskslist


@dataclasses.dataclass
class ExportTasksMessage:
    export_tasks: Optional[list[shared_exporttaskslist.ExportTasksList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
