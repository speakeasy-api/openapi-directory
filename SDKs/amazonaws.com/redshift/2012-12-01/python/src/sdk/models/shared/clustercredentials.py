import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class ClusterCredentials:
    r"""ClusterCredentials
    Temporary credentials with authorization to log on to an Amazon Redshift database. 
    """
    
    db_password: Optional[str] = dataclasses.field(default=None)
    db_user: Optional[str] = dataclasses.field(default=None)
    expiration: Optional[datetime] = dataclasses.field(default=None)
    
