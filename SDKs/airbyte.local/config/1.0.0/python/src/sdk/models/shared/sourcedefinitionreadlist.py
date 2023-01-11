import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourcedefinitionread as shared_sourcedefinitionread


@dataclass_json
@dataclasses.dataclass
class SourceDefinitionReadList:
    source_definitions: list[shared_sourcedefinitionread.SourceDefinitionRead] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceDefinitions') }})
    
