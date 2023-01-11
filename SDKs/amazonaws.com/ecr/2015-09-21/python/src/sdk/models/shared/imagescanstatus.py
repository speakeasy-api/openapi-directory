import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scanstatus_enum as shared_scanstatus_enum


@dataclass_json
@dataclasses.dataclass
class ImageScanStatus:
    r"""ImageScanStatus
    The current status of an image scan.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: Optional[shared_scanstatus_enum.ScanStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
