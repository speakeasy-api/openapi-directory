import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorytrigger as shared_repositorytrigger


@dataclass_json
@dataclasses.dataclass
class TestRepositoryTriggersInput:
    r"""TestRepositoryTriggersInput
    Represents the input of a test repository triggers operation.
    """
    
    repository_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    triggers: list[shared_repositorytrigger.RepositoryTrigger] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    
