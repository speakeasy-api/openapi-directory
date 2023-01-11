import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import boundingbox as shared_boundingbox
from ..shared import coversbodypart as shared_coversbodypart
from ..shared import protectiveequipmenttype_enum as shared_protectiveequipmenttype_enum


@dataclass_json
@dataclasses.dataclass
class EquipmentDetection:
    r"""EquipmentDetection
    Information about an item of Personal Protective Equipment (PPE) detected by <a>DetectProtectiveEquipment</a>. For more information, see <a>DetectProtectiveEquipment</a>.
    """
    
    bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    covers_body_part: Optional[shared_coversbodypart.CoversBodyPart] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CoversBodyPart') }})
    type: Optional[shared_protectiveequipmenttype_enum.ProtectiveEquipmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
