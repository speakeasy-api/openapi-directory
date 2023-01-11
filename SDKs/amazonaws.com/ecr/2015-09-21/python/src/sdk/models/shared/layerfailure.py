import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import layerfailurecode_enum as shared_layerfailurecode_enum


@dataclass_json
@dataclasses.dataclass
class LayerFailure:
    r"""LayerFailure
    An object representing an Amazon ECR image layer failure.
    """
    
    failure_code: Optional[shared_layerfailurecode_enum.LayerFailureCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    layer_digest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerDigest') }})
    
