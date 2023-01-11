import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import artifactlocation as shared_artifactlocation


@dataclass_json
@dataclasses.dataclass
class Artifact:
    r"""Artifact
    Represents information about an artifact that is worked on by actions in the pipeline.
    """
    
    location: Optional[shared_artifactlocation.ArtifactLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
