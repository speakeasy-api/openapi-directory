import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget:
    r"""AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
    One or more targets associated with the event window.
    """
    
    dedicated_host_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateInstanceEventWindowResultInstanceEventWindow:
    r"""AssociateInstanceEventWindowResultInstanceEventWindow
    Information about the event window.
    """
    
    association_target: Optional[AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget] = dataclasses.field(default=None)
    cron_expression: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_event_window_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    time_ranges: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateInstanceEventWindowResult:
    instance_event_window: Optional[AssociateInstanceEventWindowResultInstanceEventWindow] = dataclasses.field(default=None)
    
