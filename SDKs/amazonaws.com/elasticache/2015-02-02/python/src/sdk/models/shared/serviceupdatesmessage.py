import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import serviceupdatelist as shared_serviceupdatelist


@dataclasses.dataclass
class ServiceUpdatesMessage:
    marker: Optional[str] = dataclasses.field(default=None)
    service_updates: Optional[list[shared_serviceupdatelist.ServiceUpdateList]] = dataclasses.field(default=None)
    
