import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import artifact as shared_artifact


@dataclasses.dataclass
class UpdateJobOutput:
    r"""UpdateJobOutput
    Output structure for the UpateJob operation.
    """
    
    artifact_list: Optional[list[shared_artifact.Artifact]] = dataclasses.field(default=None)
    success: Optional[bool] = dataclasses.field(default=None)
    warning_message: Optional[str] = dataclasses.field(default=None)
    
