import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchresourcescomparator_enum as shared_searchresourcescomparator_enum
from ..shared import searchresourcessimplecriterionkey_enum as shared_searchresourcessimplecriterionkey_enum


@dataclass_json
@dataclasses.dataclass
class SearchResourcesSimpleCriterion:
    r"""SearchResourcesSimpleCriterion
    Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
    """
    
    comparator: Optional[shared_searchresourcescomparator_enum.SearchResourcesComparatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparator') }})
    key: Optional[shared_searchresourcessimplecriterionkey_enum.SearchResourcesSimpleCriterionKeyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
