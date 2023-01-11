import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sortdirection_enum as shared_sortdirection_enum

class LeadsSortByEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    NAME = "name"
    FIRST_NAME = "first_name"
    LAST_NAME = "last_name"
    EMAIL = "email"


@dataclasses.dataclass
class LeadsSort:
    by: Optional[LeadsSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[shared_sortdirection_enum.SortDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
