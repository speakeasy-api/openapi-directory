import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchGetRepositoriesInput:
    r"""BatchGetRepositoriesInput
    Represents the input of a batch get repositories operation.
    """
    
    repository_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryNames') }})
    
