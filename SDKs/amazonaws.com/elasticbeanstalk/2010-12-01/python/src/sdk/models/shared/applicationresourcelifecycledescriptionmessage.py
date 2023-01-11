import dataclasses
from typing import Optional
from ..shared import applicationresourcelifecycleconfig as shared_applicationresourcelifecycleconfig


@dataclasses.dataclass
class ApplicationResourceLifecycleDescriptionMessage:
    application_name: Optional[str] = dataclasses.field(default=None)
    resource_lifecycle_config: Optional[shared_applicationresourcelifecycleconfig.ApplicationResourceLifecycleConfig] = dataclasses.field(default=None)
    
