import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sortdirection_enum as shared_sortdirection_enum

class FilesSortByEnum(str, Enum):
    UPDATED_AT = "updated_at"
    NAME = "name"


@dataclasses.dataclass
class FilesSort:
    by: Optional[FilesSortByEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[shared_sortdirection_enum.SortDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
