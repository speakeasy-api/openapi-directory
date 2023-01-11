import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analyzedresource as shared_analyzedresource


@dataclass_json
@dataclasses.dataclass
class GetAnalyzedResourceResponse:
    r"""GetAnalyzedResourceResponse
    The response to the request.
    """
    
    resource: Optional[shared_analyzedresource.AnalyzedResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
