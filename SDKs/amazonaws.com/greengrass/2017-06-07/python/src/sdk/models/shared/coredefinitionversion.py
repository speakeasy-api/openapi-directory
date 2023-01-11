import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import core as shared_core


@dataclass_json
@dataclasses.dataclass
class CoreDefinitionVersion:
    r"""CoreDefinitionVersion
    Information about a core definition version.
    """
    
    cores: Optional[list[shared_core.Core]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cores') }})
    
