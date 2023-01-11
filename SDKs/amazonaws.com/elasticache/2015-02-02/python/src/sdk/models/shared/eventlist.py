import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sourcetype_enum as shared_sourcetype_enum


@dataclasses.dataclass
class EventList:
    r"""EventList
    Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.
    """
    
    date_: Optional[datetime] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    source_identifier: Optional[str] = dataclasses.field(default=None)
    source_type: Optional[shared_sourcetype_enum.SourceTypeEnum] = dataclasses.field(default=None)
    
