import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import piientitiesdetectionmaskmode_enum as shared_piientitiesdetectionmaskmode_enum
from ..shared import piientitytype_enum as shared_piientitytype_enum


@dataclass_json
@dataclasses.dataclass
class RedactionConfig:
    r"""RedactionConfig
    Provides configuration parameters for PII entity redaction.
    """
    
    mask_character: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaskCharacter') }})
    mask_mode: Optional[shared_piientitiesdetectionmaskmode_enum.PiiEntitiesDetectionMaskModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaskMode') }})
    pii_entity_types: Optional[list[shared_piientitytype_enum.PiiEntityTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PiiEntityTypes') }})
    
