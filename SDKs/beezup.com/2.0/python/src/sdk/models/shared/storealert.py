import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storealertlinks as shared_storealertlinks
from ..shared import storealertpropertyinfo as shared_storealertpropertyinfo


@dataclass_json
@dataclasses.dataclass
class StoreAlert:
    alert_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertId') }})
    alert_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertName') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    links: shared_storealertlinks.StoreAlertLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    properties: Optional[list[shared_storealertpropertyinfo.StoreAlertPropertyInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
