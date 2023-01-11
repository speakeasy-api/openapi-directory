import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectoroperator as shared_connectoroperator
from ..shared import tasktype_enum as shared_tasktype_enum


@dataclass_json
@dataclasses.dataclass
class Task:
    r"""Task
     A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>. 
    """
    
    source_fields: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFields') }})
    task_type: shared_tasktype_enum.TaskTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    connector_operator: Optional[shared_connectoroperator.ConnectorOperator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorOperator') }})
    destination_field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationField') }})
    task_properties: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskProperties') }})
    
