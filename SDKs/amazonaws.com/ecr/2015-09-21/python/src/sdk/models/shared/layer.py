import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import layeravailability_enum as shared_layeravailability_enum


@dataclass_json
@dataclasses.dataclass
class Layer:
    r"""Layer
    An object representing an Amazon ECR image layer.
    """
    
    layer_availability: Optional[shared_layeravailability_enum.LayerAvailabilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerAvailability') }})
    layer_digest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerDigest') }})
    layer_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerSize') }})
    media_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    
