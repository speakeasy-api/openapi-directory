import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import attachedpermissionsboundary as shared_attachedpermissionsboundary
from ..shared import rolelastused as shared_rolelastused
from ..shared import tag as shared_tag


@dataclasses.dataclass
class Role:
    r"""Role
    Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
    """
    
    arn: str = dataclasses.field()
    create_date: datetime = dataclasses.field()
    path: str = dataclasses.field()
    role_id: str = dataclasses.field()
    role_name: str = dataclasses.field()
    assume_role_policy_document: Optional[str] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    max_session_duration: Optional[int] = dataclasses.field(default=None)
    permissions_boundary: Optional[shared_attachedpermissionsboundary.AttachedPermissionsBoundary] = dataclasses.field(default=None)
    role_last_used: Optional[shared_rolelastused.RoleLastUsed] = dataclasses.field(default=None)
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
