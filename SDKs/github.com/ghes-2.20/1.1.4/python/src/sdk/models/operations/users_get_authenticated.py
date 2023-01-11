import dataclasses
from typing import Any,Optional
from ..shared import basic_error as shared_basic_error
from ..shared import private_user as shared_private_user
from ..shared import public_user as shared_public_user


@dataclasses.dataclass
class UsersGetAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    users_get_authenticated_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
