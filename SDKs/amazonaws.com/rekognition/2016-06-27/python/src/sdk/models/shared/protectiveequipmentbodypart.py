import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import equipmentdetection as shared_equipmentdetection
from ..shared import bodypart_enum as shared_bodypart_enum


@dataclass_json
@dataclasses.dataclass
class ProtectiveEquipmentBodyPart:
    r"""ProtectiveEquipmentBodyPart
    Information about a body part detected by <a>DetectProtectiveEquipment</a> that contains PPE. An array of <code>ProtectiveEquipmentBodyPart</code> objects is returned for each person detected by <code>DetectProtectiveEquipment</code>. 
    """
    
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    equipment_detections: Optional[list[shared_equipmentdetection.EquipmentDetection]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EquipmentDetections') }})
    name: Optional[shared_bodypart_enum.BodyPartEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
