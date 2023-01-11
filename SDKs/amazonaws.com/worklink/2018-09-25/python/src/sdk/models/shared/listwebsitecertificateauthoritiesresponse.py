import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import websitecasummary as shared_websitecasummary


@dataclass_json
@dataclasses.dataclass
class ListWebsiteCertificateAuthoritiesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    website_certificate_authorities: Optional[list[shared_websitecasummary.WebsiteCaSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebsiteCertificateAuthorities') }})
    
