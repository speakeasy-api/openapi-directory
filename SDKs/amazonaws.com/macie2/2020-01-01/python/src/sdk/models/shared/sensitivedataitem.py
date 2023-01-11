import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sensitivedataitemcategory_enum as shared_sensitivedataitemcategory_enum
from ..shared import defaultdetection as shared_defaultdetection


@dataclass_json
@dataclasses.dataclass
class SensitiveDataItem:
    r"""SensitiveDataItem
    Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
    """
    
    category: Optional[shared_sensitivedataitemcategory_enum.SensitiveDataItemCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    detections: Optional[list[shared_defaultdetection.DefaultDetection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detections') }})
    total_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    
