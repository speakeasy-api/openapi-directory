import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connectivityinfo as shared_connectivityinfo


@dataclass_json
@dataclasses.dataclass
class GetConnectivityInfoResponse:
    connectivity_info: Optional[list[shared_connectivityinfo.ConnectivityInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectivityInfo') }})
    message: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
