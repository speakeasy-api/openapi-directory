import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import propertypredicate as shared_propertypredicate
from ..shared import resourcesharetype_enum as shared_resourcesharetype_enum
from ..shared import sortcriterion as shared_sortcriterion


@dataclass_json
@dataclasses.dataclass
class SearchTablesRequest:
    catalog_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    filters: Optional[list[shared_propertypredicate.PropertyPredicate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_share_type: Optional[shared_resourcesharetype_enum.ResourceShareTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceShareType') }})
    search_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SearchText') }})
    sort_criteria: Optional[list[shared_sortcriterion.SortCriterion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortCriteria') }})
    
