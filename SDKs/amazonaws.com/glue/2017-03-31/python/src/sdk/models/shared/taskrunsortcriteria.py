import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskrunsortcolumntype_enum as shared_taskrunsortcolumntype_enum
from ..shared import sortdirectiontype_enum as shared_sortdirectiontype_enum


@dataclass_json
@dataclasses.dataclass
class TaskRunSortCriteria:
    r"""TaskRunSortCriteria
    The sorting criteria that are used to sort the list of task runs for the machine learning transform.
    """
    
    column: shared_taskrunsortcolumntype_enum.TaskRunSortColumnTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Column') }})
    sort_direction: shared_sortdirectiontype_enum.SortDirectionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortDirection') }})
    
