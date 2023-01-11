import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repositorytrigger as shared_repositorytrigger


@dataclass_json
@dataclasses.dataclass
class GetRepositoryTriggersOutput:
    r"""GetRepositoryTriggersOutput
    Represents the output of a get repository triggers operation.
    """
    
    configuration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationId') }})
    triggers: Optional[list[shared_repositorytrigger.RepositoryTrigger]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    
