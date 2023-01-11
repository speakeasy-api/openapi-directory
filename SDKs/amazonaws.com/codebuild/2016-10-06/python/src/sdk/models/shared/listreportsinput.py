import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfilter as shared_reportfilter
from ..shared import sortordertype_enum as shared_sortordertype_enum


@dataclass_json
@dataclasses.dataclass
class ListReportsInput:
    filter: Optional[shared_reportfilter.ReportFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_order: Optional[shared_sortordertype_enum.SortOrderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
