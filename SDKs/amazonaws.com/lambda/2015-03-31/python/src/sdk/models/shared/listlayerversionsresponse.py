import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import layerversionslistitem as shared_layerversionslistitem


@dataclass_json
@dataclasses.dataclass
class ListLayerVersionsResponse:
    layer_versions: Optional[list[shared_layerversionslistitem.LayerVersionsListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerVersions') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
