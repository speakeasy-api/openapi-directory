import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import entitydetails as shared_entitydetails
from ..shared import errordetails as shared_errordetails
from ..shared import jobstatustype_enum as shared_jobstatustype_enum


@dataclasses.dataclass
class GetServiceLastAccessedDetailsWithEntitiesResponse:
    entity_details_list: list[shared_entitydetails.EntityDetails] = dataclasses.field()
    job_completion_date: datetime = dataclasses.field()
    job_creation_date: datetime = dataclasses.field()
    job_status: shared_jobstatustype_enum.JobStatusTypeEnum = dataclasses.field()
    error: Optional[shared_errordetails.ErrorDetails] = dataclasses.field(default=None)
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
