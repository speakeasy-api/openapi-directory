import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import eventseverity_enum as shared_eventseverity_enum


@dataclasses.dataclass
class EventDescription:
    r"""EventDescription
    Describes an event.
    """
    
    application_name: Optional[str] = dataclasses.field(default=None)
    environment_name: Optional[str] = dataclasses.field(default=None)
    event_date: Optional[datetime] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    platform_arn: Optional[str] = dataclasses.field(default=None)
    request_id: Optional[str] = dataclasses.field(default=None)
    severity: Optional[shared_eventseverity_enum.EventSeverityEnum] = dataclasses.field(default=None)
    template_name: Optional[str] = dataclasses.field(default=None)
    version_label: Optional[str] = dataclasses.field(default=None)
    
