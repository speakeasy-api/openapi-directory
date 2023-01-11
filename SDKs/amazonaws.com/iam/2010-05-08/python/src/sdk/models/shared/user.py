import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import attachedpermissionsboundary as shared_attachedpermissionsboundary
from ..shared import tag as shared_tag


@dataclasses.dataclass
class User:
    r"""User
    <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
    """
    
    arn: str = dataclasses.field()
    create_date: datetime = dataclasses.field()
    path: str = dataclasses.field()
    user_id: str = dataclasses.field()
    user_name: str = dataclasses.field()
    password_last_used: Optional[datetime] = dataclasses.field(default=None)
    permissions_boundary: Optional[shared_attachedpermissionsboundary.AttachedPermissionsBoundary] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
