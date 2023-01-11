import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ami as shared_ami
from ..shared import container as shared_container


@dataclass_json
@dataclasses.dataclass
class OutputResources:
    r"""OutputResources
    The resources produced by this image.
    """
    
    amis: Optional[list[shared_ami.Ami]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amis') }})
    containers: Optional[list[shared_container.Container]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    
