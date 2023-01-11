import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget:
    r"""DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
    One or more targets associated with the event window.
    """
    
    dedicated_host_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateInstanceEventWindowResultInstanceEventWindow:
    r"""DisassociateInstanceEventWindowResultInstanceEventWindow
    Information about the event window.
    """
    
    association_target: Optional[DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget] = dataclasses.field(default=None)
    cron_expression: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_event_window_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    time_ranges: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateInstanceEventWindowResult:
    instance_event_window: Optional[DisassociateInstanceEventWindowResultInstanceEventWindow] = dataclasses.field(default=None)
    
