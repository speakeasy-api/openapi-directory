import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import statustype_enum as shared_statustype_enum


@dataclasses.dataclass
class AccessKeyMetadata:
    r"""AccessKeyMetadata
    <p>Contains information about an Amazon Web Services access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
    """
    
    access_key_id: Optional[str] = dataclasses.field(default=None)
    create_date: Optional[datetime] = dataclasses.field(default=None)
    status: Optional[shared_statustype_enum.StatusTypeEnum] = dataclasses.field(default=None)
    user_name: Optional[str] = dataclasses.field(default=None)
    
