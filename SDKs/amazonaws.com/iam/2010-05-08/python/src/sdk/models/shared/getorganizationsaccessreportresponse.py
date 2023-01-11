import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import accessdetail as shared_accessdetail
from ..shared import errordetails as shared_errordetails
from ..shared import jobstatustype_enum as shared_jobstatustype_enum


@dataclasses.dataclass
class GetOrganizationsAccessReportResponse:
    job_creation_date: datetime = dataclasses.field()
    job_status: shared_jobstatustype_enum.JobStatusTypeEnum = dataclasses.field()
    access_details: Optional[list[shared_accessdetail.AccessDetail]] = dataclasses.field(default=None)
    error_details: Optional[shared_errordetails.ErrorDetails] = dataclasses.field(default=None)
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    job_completion_date: Optional[datetime] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    number_of_services_accessible: Optional[int] = dataclasses.field(default=None)
    number_of_services_not_accessed: Optional[int] = dataclasses.field(default=None)
    
