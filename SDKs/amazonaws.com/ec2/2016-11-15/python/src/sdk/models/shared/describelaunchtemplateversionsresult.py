import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeLaunchTemplateVersionsResult:
    launch_template_versions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
