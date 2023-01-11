import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PostWebhooksFirehoseTestSecurity:
    client_access_token: shared_security.SchemeClientAccessToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostWebhooksFirehoseTestRequest:
    security: PostWebhooksFirehoseTestSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostWebhooksFirehoseTestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_webhooks_firehose_test_default_application_json_string: Optional[str] = dataclasses.field(default=None)
    
