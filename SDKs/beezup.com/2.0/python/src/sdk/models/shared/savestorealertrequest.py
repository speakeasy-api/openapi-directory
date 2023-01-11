import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import storealertproperty as shared_storealertproperty


@dataclass_json
@dataclasses.dataclass
class SaveStoreAlertRequest:
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    properties: Optional[list[shared_storealertproperty.StoreAlertProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
