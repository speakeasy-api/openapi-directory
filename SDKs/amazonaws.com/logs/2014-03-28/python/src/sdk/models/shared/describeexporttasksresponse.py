import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exporttask as shared_exporttask


@dataclass_json
@dataclasses.dataclass
class DescribeExportTasksResponse:
    export_tasks: Optional[list[shared_exporttask.ExportTask]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportTasks') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
