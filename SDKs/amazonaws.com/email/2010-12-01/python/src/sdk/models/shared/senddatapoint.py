import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SendDataPoint:
    r"""SendDataPoint
    Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity. 
    """
    
    bounces: Optional[int] = dataclasses.field(default=None)
    complaints: Optional[int] = dataclasses.field(default=None)
    delivery_attempts: Optional[int] = dataclasses.field(default=None)
    rejects: Optional[int] = dataclasses.field(default=None)
    timestamp: Optional[datetime] = dataclasses.field(default=None)
    
