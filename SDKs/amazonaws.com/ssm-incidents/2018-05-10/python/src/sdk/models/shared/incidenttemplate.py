import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import notificationtargetitem as shared_notificationtargetitem


@dataclass_json
@dataclasses.dataclass
class IncidentTemplate:
    r"""IncidentTemplate
    Basic details used in creating a response plan. The response plan is then used to create an incident record.
    """
    
    impact: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('impact') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    dedupe_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dedupeString') }})
    notification_targets: Optional[list[shared_notificationtargetitem.NotificationTargetItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTargets') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
