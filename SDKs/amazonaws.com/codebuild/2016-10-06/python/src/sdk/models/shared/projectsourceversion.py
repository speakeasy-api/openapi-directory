import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProjectSourceVersion:
    r"""ProjectSourceVersion
     A source identifier and its corresponding version. 
    """
    
    source_identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceIdentifier') }})
    source_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVersion') }})
    
