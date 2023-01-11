import dataclasses
from typing import Optional
from enum import Enum
from ..shared import artifact as shared_artifact
from ..shared import jobtype_enum as shared_jobtype_enum


@dataclasses.dataclass
class CreateJobOutput:
    r"""CreateJobOutput
    Output structure for the CreateJob operation.
    """
    
    artifact_list: Optional[list[shared_artifact.Artifact]] = dataclasses.field(default=None)
    job_id: Optional[str] = dataclasses.field(default=None)
    job_type: Optional[shared_jobtype_enum.JobTypeEnum] = dataclasses.field(default=None)
    signature: Optional[str] = dataclasses.field(default=None)
    signature_file_contents: Optional[str] = dataclasses.field(default=None)
    warning_message: Optional[str] = dataclasses.field(default=None)
    
