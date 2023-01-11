import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buildbatchfilter as shared_buildbatchfilter
from ..shared import sortordertype_enum as shared_sortordertype_enum


@dataclass_json
@dataclasses.dataclass
class ListBuildBatchesForProjectInput:
    filter: Optional[shared_buildbatchfilter.BuildBatchFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    project_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    sort_order: Optional[shared_sortordertype_enum.SortOrderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
