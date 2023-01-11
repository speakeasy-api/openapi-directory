import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import sourcetype_enum as shared_sourcetype_enum


@dataclasses.dataclass
class EventList:
    r"""EventList
     This data type is used as a response element in the <a>DescribeEvents</a> action.
    """
    
    date_: Optional[datetime] = dataclasses.field(default=None)
    event_categories: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    source_arn: Optional[str] = dataclasses.field(default=None)
    source_identifier: Optional[str] = dataclasses.field(default=None)
    source_type: Optional[shared_sourcetype_enum.SourceTypeEnum] = dataclasses.field(default=None)
    
