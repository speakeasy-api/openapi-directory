import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import layerslistitem as shared_layerslistitem


@dataclass_json
@dataclasses.dataclass
class ListLayersResponse:
    layers: Optional[list[shared_layerslistitem.LayersListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layers') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
