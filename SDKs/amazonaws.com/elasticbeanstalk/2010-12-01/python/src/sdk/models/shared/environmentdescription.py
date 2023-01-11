import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import environmentlink as shared_environmentlink
from ..shared import environmenthealth_enum as shared_environmenthealth_enum
from ..shared import environmenthealthstatus_enum as shared_environmenthealthstatus_enum
from ..shared import environmentresourcesdescription as shared_environmentresourcesdescription
from ..shared import environmentstatus_enum as shared_environmentstatus_enum
from ..shared import environmenttier as shared_environmenttier
from ..operations import environmentlink as operations_environmentlink
from ..operations import environmenthealth_enum as operations_environmenthealth_enum
from ..operations import environmenthealthstatus_enum as operations_environmenthealthstatus_enum
from ..operations import environmentresourcesdescription as operations_environmentresourcesdescription
from ..operations import environmentstatus_enum as operations_environmentstatus_enum
from ..operations import environmenttier as operations_environmenttier


@dataclasses.dataclass
class EnvironmentDescription:
    r"""EnvironmentDescription
    Describes the properties of an environment.
    """
    
    abortable_operation_in_progress: Optional[bool] = dataclasses.field(default=None)
    application_name: Optional[str] = dataclasses.field(default=None)
    cname: Optional[str] = dataclasses.field(default=None)
    date_created: Optional[datetime] = dataclasses.field(default=None)
    date_updated: Optional[datetime] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    endpoint_url: Optional[str] = dataclasses.field(default=None)
    environment_arn: Optional[str] = dataclasses.field(default=None)
    environment_id: Optional[str] = dataclasses.field(default=None)
    environment_links: Optional[list[shared_environmentlink.EnvironmentLink]] = dataclasses.field(default=None)
    environment_name: Optional[str] = dataclasses.field(default=None)
    health: Optional[shared_environmenthealth_enum.EnvironmentHealthEnum] = dataclasses.field(default=None)
    health_status: Optional[shared_environmenthealthstatus_enum.EnvironmentHealthStatusEnum] = dataclasses.field(default=None)
    operations_role: Optional[str] = dataclasses.field(default=None)
    platform_arn: Optional[str] = dataclasses.field(default=None)
    resources: Optional[shared_environmentresourcesdescription.EnvironmentResourcesDescription] = dataclasses.field(default=None)
    solution_stack_name: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_environmentstatus_enum.EnvironmentStatusEnum] = dataclasses.field(default=None)
    template_name: Optional[str] = dataclasses.field(default=None)
    tier: Optional[shared_environmenttier.EnvironmentTier] = dataclasses.field(default=None)
    version_label: Optional[str] = dataclasses.field(default=None)
    
