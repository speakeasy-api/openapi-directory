import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import layerfailure as shared_layerfailure
from ..shared import layer as shared_layer


@dataclass_json
@dataclasses.dataclass
class BatchCheckLayerAvailabilityResponse:
    failures: Optional[list[shared_layerfailure.LayerFailure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    layers: Optional[list[shared_layer.Layer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layers') }})
    
