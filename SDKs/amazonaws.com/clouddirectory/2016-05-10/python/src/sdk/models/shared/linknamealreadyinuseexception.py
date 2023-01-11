import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinkNameAlreadyInUseException:
    r"""LinkNameAlreadyInUseException
    Indicates that a link could not be created due to a naming conflict. Choose a different name and then try again.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
