import dataclasses
from typing import Optional
from ..shared import targetdescription as shared_targetdescription
from ..shared import targethealth as shared_targethealth


@dataclasses.dataclass
class TargetHealthDescription:
    r"""TargetHealthDescription
    Information about the health of a target.
    """
    
    health_check_port: Optional[str] = dataclasses.field(default=None)
    target: Optional[shared_targetdescription.TargetDescription] = dataclasses.field(default=None)
    target_health: Optional[shared_targethealth.TargetHealth] = dataclasses.field(default=None)
    
