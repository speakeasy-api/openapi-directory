import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lensupgradesummary as shared_lensupgradesummary
from ..shared import notificationtype_enum as shared_notificationtype_enum


@dataclass_json
@dataclasses.dataclass
class NotificationSummary:
    r"""NotificationSummary
    A notification summary return object.
    """
    
    lens_upgrade_summary: Optional[shared_lensupgradesummary.LensUpgradeSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensUpgradeSummary') }})
    type: Optional[shared_notificationtype_enum.NotificationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
