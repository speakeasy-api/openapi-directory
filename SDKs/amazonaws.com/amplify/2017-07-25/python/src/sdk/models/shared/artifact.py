import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Artifact:
    r"""Artifact
     Describes an artifact. 
    """
    
    artifact_file_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactFileName') }})
    artifact_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactId') }})
    
