import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import configissue as shared_configissue
from ..shared import httpvalidationerror as shared_httpvalidationerror


@dataclasses.dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams:
    firmware_hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity:
    api_key_header: shared_security.SchemeAPIKeyHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest:
    path_params: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams = dataclasses.field()
    security: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    config_issues: Optional[list[shared_configissue.ConfigIssue]] = dataclasses.field(default=None)
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    
