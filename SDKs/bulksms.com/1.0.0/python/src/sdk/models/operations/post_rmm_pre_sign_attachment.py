import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import presignrequest as shared_presignrequest
from ..shared import presigninfo as shared_presigninfo


@dataclasses.dataclass
class PostRmmPreSignAttachmentSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class PostRmmPreSignAttachmentRequest:
    request: shared_presignrequest.PreSignRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostRmmPreSignAttachmentSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostRmmPreSignAttachmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_sign_info: Optional[shared_presigninfo.PreSignInfo] = dataclasses.field(default=None)
    
