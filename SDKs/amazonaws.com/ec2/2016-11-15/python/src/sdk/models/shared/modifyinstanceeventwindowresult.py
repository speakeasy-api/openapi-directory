import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget:
    r"""ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget
    One or more targets associated with the event window.
    """
    
    dedicated_host_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyInstanceEventWindowResultInstanceEventWindow:
    r"""ModifyInstanceEventWindowResultInstanceEventWindow
    Information about the event window.
    """
    
    association_target: Optional[ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget] = dataclasses.field(default=None)
    cron_expression: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_event_window_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    time_ranges: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyInstanceEventWindowResult:
    instance_event_window: Optional[ModifyInstanceEventWindowResultInstanceEventWindow] = dataclasses.field(default=None)
    
