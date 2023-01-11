import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transformsortcolumntype_enum as shared_transformsortcolumntype_enum
from ..shared import sortdirectiontype_enum as shared_sortdirectiontype_enum


@dataclass_json
@dataclasses.dataclass
class TransformSortCriteria:
    r"""TransformSortCriteria
    The sorting criteria that are associated with the machine learning transform.
    """
    
    column: shared_transformsortcolumntype_enum.TransformSortColumnTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Column') }})
    sort_direction: shared_sortdirectiontype_enum.SortDirectionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortDirection') }})
    
