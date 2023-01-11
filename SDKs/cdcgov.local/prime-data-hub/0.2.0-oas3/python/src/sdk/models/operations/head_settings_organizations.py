import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class HeadSettingsOrganizationsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class HeadSettingsOrganizationsRequest:
    security: HeadSettingsOrganizationsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class HeadSettingsOrganizationsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    
