import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclass_json
@dataclasses.dataclass
class PutWebhooksFirehoseRequestBody:
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class PutWebhooksFirehoseSecurity:
    client_access_token: shared_security.SchemeClientAccessToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PutWebhooksFirehoseRequest:
    security: PutWebhooksFirehoseSecurity = dataclasses.field()
    request: Optional[PutWebhooksFirehoseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWebhooksFirehoseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
