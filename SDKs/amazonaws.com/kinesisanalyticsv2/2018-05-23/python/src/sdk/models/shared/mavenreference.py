import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MavenReference:
    r"""MavenReference
    The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
    """
    
    artifact_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtifactId') }})
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
