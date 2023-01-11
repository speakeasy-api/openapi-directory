import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import share as shared_share
from ..shared import user as shared_user
from ..shared import notification as shared_notification
from ..shared import resource as shared_resource


@dataclass_json
@dataclasses.dataclass
class ShareResponse:
    r"""ShareResponse
    Response object for shares.
    """
    
    data: Optional[shared_share.Share] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    included: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('included') }})
    response_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseStatus') }})
    
