import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeIamInstanceProfileAssociationsResult:
    iam_instance_profile_associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
