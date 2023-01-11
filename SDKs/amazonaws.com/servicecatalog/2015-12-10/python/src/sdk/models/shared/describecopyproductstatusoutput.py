import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import copyproductstatus_enum as shared_copyproductstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeCopyProductStatusOutput:
    copy_product_status: Optional[shared_copyproductstatus_enum.CopyProductStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyProductStatus') }})
    status_detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetail') }})
    target_product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetProductId') }})
    
