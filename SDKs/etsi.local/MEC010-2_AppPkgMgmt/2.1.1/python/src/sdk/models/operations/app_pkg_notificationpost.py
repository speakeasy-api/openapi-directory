import dataclasses
from typing import Optional
from ..shared import apppkgnotification as shared_apppkgnotification
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class AppPkgNotificationPostRequest:
    request: shared_apppkgnotification.AppPkgNotification = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppPkgNotificationPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
