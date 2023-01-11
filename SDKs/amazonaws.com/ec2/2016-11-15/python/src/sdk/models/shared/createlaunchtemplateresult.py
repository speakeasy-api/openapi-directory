import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateLaunchTemplateResultLaunchTemplate:
    r"""CreateLaunchTemplateResultLaunchTemplate
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
class CreateLaunchTemplateResultWarning:
    r"""CreateLaunchTemplateResultWarning
    If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
    """
    
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateResult:
    launch_template: Optional[CreateLaunchTemplateResultLaunchTemplate] = dataclasses.field(default=None)
    warning: Optional[CreateLaunchTemplateResultWarning] = dataclasses.field(default=None)
    
