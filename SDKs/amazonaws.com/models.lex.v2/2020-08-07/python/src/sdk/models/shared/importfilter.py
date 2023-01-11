import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importfiltername_enum as shared_importfiltername_enum
from ..shared import importfilteroperator_enum as shared_importfilteroperator_enum


@dataclass_json
@dataclasses.dataclass
class ImportFilter:
    r"""ImportFilter
    Filters the response from the operation.
    """
    
    name: shared_importfiltername_enum.ImportFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: shared_importfilteroperator_enum.ImportFilterOperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
