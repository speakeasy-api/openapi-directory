import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import applicationresourcelifecycleconfig as shared_applicationresourcelifecycleconfig


@dataclasses.dataclass
class ApplicationDescription:
    r"""ApplicationDescription
    Describes the properties of an application.
    """
    
    application_arn: Optional[str] = dataclasses.field(default=None)
    application_name: Optional[str] = dataclasses.field(default=None)
    configuration_templates: Optional[list[str]] = dataclasses.field(default=None)
    date_created: Optional[datetime] = dataclasses.field(default=None)
    date_updated: Optional[datetime] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    resource_lifecycle_config: Optional[shared_applicationresourcelifecycleconfig.ApplicationResourceLifecycleConfig] = dataclasses.field(default=None)
    versions: Optional[list[str]] = dataclasses.field(default=None)
    
