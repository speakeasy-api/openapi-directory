import dataclasses
from typing import Optional
from ..shared import authentication as shared_authentication


@dataclasses.dataclass
class User:
    arn: Optional[str] = dataclasses.field(default=None)
    access_string: Optional[str] = dataclasses.field(default=None)
    authentication: Optional[shared_authentication.Authentication] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    user_group_ids: Optional[list[str]] = dataclasses.field(default=None)
    user_id: Optional[str] = dataclasses.field(default=None)
    user_name: Optional[str] = dataclasses.field(default=None)
    
