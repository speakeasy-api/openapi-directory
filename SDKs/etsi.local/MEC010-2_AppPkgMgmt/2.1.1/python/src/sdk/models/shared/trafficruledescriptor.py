import dataclasses
from typing import Optional
from enum import Enum
from ..shared import action_enum as shared_action_enum
from ..shared import interfacedescriptor as shared_interfacedescriptor
from ..shared import filtertype_enum as shared_filtertype_enum
from ..shared import trafficfilter as shared_trafficfilter


@dataclasses.dataclass
class TrafficRuleDescriptor:
    action: shared_action_enum.ActionEnum = dataclasses.field()
    filter_type: shared_filtertype_enum.FilterTypeEnum = dataclasses.field()
    priority: int = dataclasses.field()
    traffic_filter: list[shared_trafficfilter.TrafficFilter] = dataclasses.field()
    traffic_rule_id: str = dataclasses.field()
    dst_interface: Optional[list[shared_interfacedescriptor.InterfaceDescriptor]] = dataclasses.field(default=None)
    
