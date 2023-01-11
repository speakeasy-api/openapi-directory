import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class LoginProfile:
    r"""LoginProfile
    <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
    """
    
    create_date: datetime = dataclasses.field()
    user_name: str = dataclasses.field()
    password_reset_required: Optional[bool] = dataclasses.field(default=None)
    
