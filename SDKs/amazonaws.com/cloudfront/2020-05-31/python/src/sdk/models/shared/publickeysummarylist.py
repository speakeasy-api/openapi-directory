import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PublicKeySummaryList:
    r"""PublicKeySummaryList
    Contains information about a public key.
    """
    
    created_time: datetime = dataclasses.field()
    encoded_key: str = dataclasses.field()
    id: str = dataclasses.field()
    name: str = dataclasses.field()
    comment: Optional[str] = dataclasses.field(default=None)
    
