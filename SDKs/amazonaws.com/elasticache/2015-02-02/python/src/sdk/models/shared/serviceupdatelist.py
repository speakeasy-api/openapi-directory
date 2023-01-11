import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import serviceupdateseverity_enum as shared_serviceupdateseverity_enum
from ..shared import serviceupdatestatus_enum as shared_serviceupdatestatus_enum
from ..shared import serviceupdatetype_enum as shared_serviceupdatetype_enum


@dataclasses.dataclass
class ServiceUpdateList:
    r"""ServiceUpdateList
    An update that you can apply to your Redis clusters.
    """
    
    auto_update_after_recommended_apply_by_date: Optional[bool] = dataclasses.field(default=None)
    engine: Optional[str] = dataclasses.field(default=None)
    engine_version: Optional[str] = dataclasses.field(default=None)
    estimated_update_time: Optional[str] = dataclasses.field(default=None)
    service_update_description: Optional[str] = dataclasses.field(default=None)
    service_update_end_date: Optional[datetime] = dataclasses.field(default=None)
    service_update_name: Optional[str] = dataclasses.field(default=None)
    service_update_recommended_apply_by_date: Optional[datetime] = dataclasses.field(default=None)
    service_update_release_date: Optional[datetime] = dataclasses.field(default=None)
    service_update_severity: Optional[shared_serviceupdateseverity_enum.ServiceUpdateSeverityEnum] = dataclasses.field(default=None)
    service_update_status: Optional[shared_serviceupdatestatus_enum.ServiceUpdateStatusEnum] = dataclasses.field(default=None)
    service_update_type: Optional[shared_serviceupdatetype_enum.ServiceUpdateTypeEnum] = dataclasses.field(default=None)
    
