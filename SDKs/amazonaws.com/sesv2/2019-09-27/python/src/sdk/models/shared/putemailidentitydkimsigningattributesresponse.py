import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dkimstatus_enum as shared_dkimstatus_enum


@dataclass_json
@dataclasses.dataclass
class PutEmailIdentityDkimSigningAttributesResponse:
    r"""PutEmailIdentityDkimSigningAttributesResponse
    <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>
    """
    
    dkim_status: Optional[shared_dkimstatus_enum.DkimStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimStatus') }})
    dkim_tokens: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DkimTokens') }})
    
