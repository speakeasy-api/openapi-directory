import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import websiteauthorizationprovidersummary as shared_websiteauthorizationprovidersummary


@dataclass_json
@dataclasses.dataclass
class ListWebsiteAuthorizationProvidersResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    website_authorization_providers: Optional[list[shared_websiteauthorizationprovidersummary.WebsiteAuthorizationProviderSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebsiteAuthorizationProviders') }})
    
