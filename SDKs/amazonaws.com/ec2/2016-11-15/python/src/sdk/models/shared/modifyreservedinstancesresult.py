import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyReservedInstancesResult:
    r"""ModifyReservedInstancesResult
    Contains the output of ModifyReservedInstances.
    """
    
    reserved_instances_modification_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
