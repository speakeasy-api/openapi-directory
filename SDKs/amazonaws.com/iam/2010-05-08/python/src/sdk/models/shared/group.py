import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class Group:
    r"""Group
    <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
    """
    
    arn: str = dataclasses.field()
    create_date: datetime = dataclasses.field()
    group_id: str = dataclasses.field()
    group_name: str = dataclasses.field()
    path: str = dataclasses.field()
    
