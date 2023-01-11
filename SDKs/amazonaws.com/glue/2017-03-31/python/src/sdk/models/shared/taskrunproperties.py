import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import exportlabelstaskrunproperties as shared_exportlabelstaskrunproperties
from ..shared import findmatchestaskrunproperties as shared_findmatchestaskrunproperties
from ..shared import importlabelstaskrunproperties as shared_importlabelstaskrunproperties
from ..shared import labelingsetgenerationtaskrunproperties as shared_labelingsetgenerationtaskrunproperties
from ..shared import tasktype_enum as shared_tasktype_enum


@dataclass_json
@dataclasses.dataclass
class TaskRunProperties:
    r"""TaskRunProperties
    The configuration properties for the task run.
    """
    
    export_labels_task_run_properties: Optional[shared_exportlabelstaskrunproperties.ExportLabelsTaskRunProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExportLabelsTaskRunProperties') }})
    find_matches_task_run_properties: Optional[shared_findmatchestaskrunproperties.FindMatchesTaskRunProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindMatchesTaskRunProperties') }})
    import_labels_task_run_properties: Optional[shared_importlabelstaskrunproperties.ImportLabelsTaskRunProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImportLabelsTaskRunProperties') }})
    labeling_set_generation_task_run_properties: Optional[shared_labelingsetgenerationtaskrunproperties.LabelingSetGenerationTaskRunProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LabelingSetGenerationTaskRunProperties') }})
    task_type: Optional[shared_tasktype_enum.TaskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskType') }})
    
