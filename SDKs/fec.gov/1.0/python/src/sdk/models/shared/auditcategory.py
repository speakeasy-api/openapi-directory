import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import auditcategoryrelation as shared_auditcategoryrelation


@dataclass_json
@dataclasses.dataclass
class AuditCategory:
    primary_category_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_category_id') }})
    primary_category_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_category_name') }})
    sub_category_list: Optional[list[shared_auditcategoryrelation.AuditCategoryRelation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_category_list') }})
    
