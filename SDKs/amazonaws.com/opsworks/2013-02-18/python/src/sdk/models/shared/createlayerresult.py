import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateLayerResult:
    r"""CreateLayerResult
    Contains the response to a <code>CreateLayer</code> request.
    """
    
    layer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerId') }})
    
