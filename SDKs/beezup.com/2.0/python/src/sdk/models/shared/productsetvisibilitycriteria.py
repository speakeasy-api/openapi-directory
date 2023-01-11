import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productsetvisibilitycriterialogictype_enum as shared_productsetvisibilitycriterialogictype_enum


@dataclass_json
@dataclasses.dataclass
class ProductSetVisibilityCriteria:
    logic: shared_productsetvisibilitycriterialogictype_enum.ProductSetVisibilityCriteriaLogicTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logic') }})
    disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    excluded: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excluded') }})
    exist: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exist') }})
    uncategorized: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uncategorized') }})
    
