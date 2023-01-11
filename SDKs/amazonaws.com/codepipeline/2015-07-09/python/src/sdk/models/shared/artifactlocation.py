import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3artifactlocation as shared_s3artifactlocation
from ..shared import artifactlocationtype_enum as shared_artifactlocationtype_enum


@dataclass_json
@dataclasses.dataclass
class ArtifactLocation:
    r"""ArtifactLocation
    Represents information about the location of an artifact.
    """
    
    s3_location: Optional[shared_s3artifactlocation.S3ArtifactLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Location') }})
    type: Optional[shared_artifactlocationtype_enum.ArtifactLocationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
