import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteLaunchTemplateResultLaunchTemplate:
    r"""DeleteLaunchTemplateResultLaunchTemplate
    Information about the launch template.
    """
    
    create_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    created_by: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_version_number: Optional[dict[str, Any]] = dataclasses.field(default=None)
    latest_version_number: Optional[dict[str, Any]] = dataclasses.field(default=None)
    launch_template_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    launch_template_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteLaunchTemplateResult:
    launch_template: Optional[DeleteLaunchTemplateResultLaunchTemplate] = dataclasses.field(default=None)
    
