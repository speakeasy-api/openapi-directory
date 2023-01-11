import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CancelImportTaskResult:
    import_task_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    previous_state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
