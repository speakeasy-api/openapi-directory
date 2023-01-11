import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpauthorization as shared_httpauthorization
from ..shared import httpactionheader as shared_httpactionheader


@dataclass_json
@dataclasses.dataclass
class HTTPAction:
    r"""HTTPAction
    Send data to an HTTPS endpoint.
    """
    
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    auth: Optional[shared_httpauthorization.HTTPAuthorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    confirmation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmationUrl') }})
    headers: Optional[list[shared_httpactionheader.HTTPActionHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    
