import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import errordetails as shared_errordetails
from ..shared import jobstatustype_enum as shared_jobstatustype_enum
from ..shared import accessadvisorusagegranularitytype_enum as shared_accessadvisorusagegranularitytype_enum
from ..shared import servicelastaccessed as shared_servicelastaccessed


@dataclasses.dataclass
class GetServiceLastAccessedDetailsResponse:
    job_completion_date: datetime = dataclasses.field()
    job_creation_date: datetime = dataclasses.field()
    job_status: shared_jobstatustype_enum.JobStatusTypeEnum = dataclasses.field()
    services_last_accessed: list[shared_servicelastaccessed.ServiceLastAccessed] = dataclasses.field()
    error: Optional[shared_errordetails.ErrorDetails] = dataclasses.field(default=None)
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    job_type: Optional[shared_accessadvisorusagegranularitytype_enum.AccessAdvisorUsageGranularityTypeEnum] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
