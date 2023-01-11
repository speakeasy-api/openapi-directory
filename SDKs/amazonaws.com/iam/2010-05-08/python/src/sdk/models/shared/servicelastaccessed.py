import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import trackedactionlastaccessed as shared_trackedactionlastaccessed


@dataclasses.dataclass
class ServiceLastAccessed:
    r"""ServiceLastAccessed
    <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
    """
    
    service_name: str = dataclasses.field()
    service_namespace: str = dataclasses.field()
    last_authenticated: Optional[datetime] = dataclasses.field(default=None)
    last_authenticated_entity: Optional[str] = dataclasses.field(default=None)
    last_authenticated_region: Optional[str] = dataclasses.field(default=None)
    total_authenticated_entities: Optional[int] = dataclasses.field(default=None)
    tracked_actions_last_accessed: Optional[list[shared_trackedactionlastaccessed.TrackedActionLastAccessed]] = dataclasses.field(default=None)
    
