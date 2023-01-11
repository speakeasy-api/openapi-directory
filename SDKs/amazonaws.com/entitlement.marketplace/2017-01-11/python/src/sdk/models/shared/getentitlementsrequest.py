import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetEntitlementsRequest:
    r"""GetEntitlementsRequest
    The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
    """
    
    product_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    filter: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
