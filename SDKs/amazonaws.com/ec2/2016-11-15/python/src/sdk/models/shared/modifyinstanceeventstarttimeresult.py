import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyInstanceEventStartTimeResultEvent:
    r"""ModifyInstanceEventStartTimeResultEvent
    Describes a scheduled event for an instance.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_event_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    not_after: Optional[dict[str, Any]] = dataclasses.field(default=None)
    not_before: Optional[dict[str, Any]] = dataclasses.field(default=None)
    not_before_deadline: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyInstanceEventStartTimeResult:
    event: Optional[ModifyInstanceEventStartTimeResultEvent] = dataclasses.field(default=None)
    
