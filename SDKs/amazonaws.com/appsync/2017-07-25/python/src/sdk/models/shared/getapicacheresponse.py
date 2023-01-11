import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apicache as shared_apicache


@dataclass_json
@dataclasses.dataclass
class GetAPICacheResponse:
    r"""GetAPICacheResponse
    Represents the output of a <code>GetApiCache</code> operation.
    """
    
    api_cache: Optional[shared_apicache.APICache] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiCache') }})
    
