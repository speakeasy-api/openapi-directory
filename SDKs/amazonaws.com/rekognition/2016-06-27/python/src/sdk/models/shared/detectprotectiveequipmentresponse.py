import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiveequipmentperson as shared_protectiveequipmentperson
from ..shared import protectiveequipmentsummary as shared_protectiveequipmentsummary


@dataclass_json
@dataclasses.dataclass
class DetectProtectiveEquipmentResponse:
    persons: Optional[list[shared_protectiveequipmentperson.ProtectiveEquipmentPerson]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Persons') }})
    protective_equipment_model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectiveEquipmentModelVersion') }})
    summary: Optional[shared_protectiveequipmentsummary.ProtectiveEquipmentSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    
