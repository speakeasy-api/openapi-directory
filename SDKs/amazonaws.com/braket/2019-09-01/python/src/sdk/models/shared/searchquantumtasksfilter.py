import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchquantumtasksfilteroperator_enum as shared_searchquantumtasksfilteroperator_enum


@dataclass_json
@dataclasses.dataclass
class SearchQuantumTasksFilter:
    r"""SearchQuantumTasksFilter
    A filter to use to search for tasks.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: shared_searchquantumtasksfilteroperator_enum.SearchQuantumTasksFilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
