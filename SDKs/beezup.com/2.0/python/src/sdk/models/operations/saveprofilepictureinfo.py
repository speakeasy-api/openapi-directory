import dataclasses
from typing import Optional
from ..shared import profilepictureinfo as shared_profilepictureinfo
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage


@dataclasses.dataclass
class SaveProfilePictureInfoRequest:
    request: shared_profilepictureinfo.ProfilePictureInfo = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SaveProfilePictureInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    
