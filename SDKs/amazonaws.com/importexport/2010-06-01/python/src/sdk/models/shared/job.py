import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import jobtype_enum as shared_jobtype_enum


@dataclasses.dataclass
class Job:
    r"""Job
    Representation of a job returned by the ListJobs operation.
    """
    
    creation_date: Optional[datetime] = dataclasses.field(default=None)
    is_canceled: Optional[bool] = dataclasses.field(default=None)
    job_id: Optional[str] = dataclasses.field(default=None)
    job_type: Optional[shared_jobtype_enum.JobTypeEnum] = dataclasses.field(default=None)
    
