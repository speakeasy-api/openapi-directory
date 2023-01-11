import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3location as shared_s3location


@dataclass_json
@dataclasses.dataclass
class ArtifactDetail:
    r"""ArtifactDetail
    Artifact details for the action execution, such as the artifact location.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    s3location: Optional[shared_s3location.S3Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3location') }})
    
