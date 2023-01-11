import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiveequipmentbodypart as shared_protectiveequipmentbodypart
from ..shared import boundingbox as shared_boundingbox


@dataclass_json
@dataclasses.dataclass
class ProtectiveEquipmentPerson:
    r"""ProtectiveEquipmentPerson
    A person detected by a call to <a>DetectProtectiveEquipment</a>. The API returns all persons detected in the input image in an array of <code>ProtectiveEquipmentPerson</code> objects.
    """
    
    body_parts: Optional[list[shared_protectiveequipmentbodypart.ProtectiveEquipmentBodyPart]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BodyParts') }})
    bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    
