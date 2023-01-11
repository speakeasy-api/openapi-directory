import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiveequipmenttype_enum as shared_protectiveequipmenttype_enum


@dataclass_json
@dataclasses.dataclass
class ProtectiveEquipmentSummarizationAttributes:
    r"""ProtectiveEquipmentSummarizationAttributes
    Specifies summary attributes to return from a call to <a>DetectProtectiveEquipment</a>. You can specify which types of PPE to summarize. You can also specify a minimum confidence value for detections. Summary information is returned in the <code>Summary</code> (<a>ProtectiveEquipmentSummary</a>) field of the response from <code>DetectProtectiveEquipment</code>. The summary includes which persons in an image were detected wearing the requested types of person protective equipment (PPE), which persons were detected as not wearing PPE, and the persons in which a determination could not be made. For more information, see <a>ProtectiveEquipmentSummary</a>.
    """
    
    min_confidence: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinConfidence') }})
    required_equipment_types: list[shared_protectiveequipmenttype_enum.ProtectiveEquipmentTypeEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiredEquipmentTypes') }})
    
