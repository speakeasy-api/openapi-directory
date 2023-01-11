import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutRepositoryTriggersOutput:
    r"""PutRepositoryTriggersOutput
    Represents the output of a put repository triggers operation.
    """
    
    configuration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationId') }})
    
