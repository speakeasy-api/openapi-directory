import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import layer as shared_layer


@dataclass_json
@dataclasses.dataclass
class DescribeLayersResult:
    r"""DescribeLayersResult
    Contains the response to a <code>DescribeLayers</code> request.
    """
    
    layers: Optional[list[shared_layer.Layer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layers') }})
    
