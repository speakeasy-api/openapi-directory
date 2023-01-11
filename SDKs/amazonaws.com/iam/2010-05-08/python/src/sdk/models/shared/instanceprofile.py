import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import role as shared_role
from ..shared import tag as shared_tag


@dataclasses.dataclass
class InstanceProfile:
    r"""InstanceProfile
    <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
    """
    
    arn: str = dataclasses.field()
    create_date: datetime = dataclasses.field()
    instance_profile_id: str = dataclasses.field()
    instance_profile_name: str = dataclasses.field()
    path: str = dataclasses.field()
    roles: list[shared_role.Role] = dataclasses.field()
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
