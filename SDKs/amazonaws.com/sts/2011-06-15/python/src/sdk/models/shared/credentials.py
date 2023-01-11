import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class Credentials:
    r"""Credentials
    Amazon Web Services credentials for API authentication.
    """
    
    access_key_id: str = dataclasses.field()
    expiration: datetime = dataclasses.field()
    secret_access_key: str = dataclasses.field()
    session_token: str = dataclasses.field()
    
