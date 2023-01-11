import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteLaunchTemplateVersionsResult:
    successfully_deleted_launch_template_versions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unsuccessfully_deleted_launch_template_versions: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
