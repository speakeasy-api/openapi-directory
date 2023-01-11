import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import artifact as shared_artifact
from ..shared import jobtype_enum as shared_jobtype_enum


@dataclasses.dataclass
class GetStatusOutput:
    r"""GetStatusOutput
    Output structure for the GetStatus operation.
    """
    
    artifact_list: Optional[list[shared_artifact.Artifact]] = dataclasses.field(default=None)
    carrier: Optional[str] = dataclasses.field(default=None)
    creation_date: Optional[datetime] = dataclasses.field(default=None)
    current_manifest: Optional[str] = dataclasses.field(default=None)
    error_count: Optional[int] = dataclasses.field(default=None)
    job_id: Optional[str] = dataclasses.field(default=None)
    job_type: Optional[shared_jobtype_enum.JobTypeEnum] = dataclasses.field(default=None)
    location_code: Optional[str] = dataclasses.field(default=None)
    location_message: Optional[str] = dataclasses.field(default=None)
    log_bucket: Optional[str] = dataclasses.field(default=None)
    log_key: Optional[str] = dataclasses.field(default=None)
    progress_code: Optional[str] = dataclasses.field(default=None)
    progress_message: Optional[str] = dataclasses.field(default=None)
    signature: Optional[str] = dataclasses.field(default=None)
    signature_file_contents: Optional[str] = dataclasses.field(default=None)
    tracking_number: Optional[str] = dataclasses.field(default=None)
    
