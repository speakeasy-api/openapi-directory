import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sortdirection_enum as shared_sortdirection_enum

class OpportunitiesSortByEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    TITLE = "title"
    WIN_PROBABILITY = "win_probability"
    MONETARY_AMOUNT = "monetary_amount"
    STATUS = "status"


@dataclasses.dataclass
class OpportunitiesSort:
    by: Optional[OpportunitiesSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[shared_sortdirection_enum.SortDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
