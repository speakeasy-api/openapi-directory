import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeplatform_enum as shared_computeplatform_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateApplicationInput:
    r"""CreateApplicationInput
    Represents the input of a <code>CreateApplication</code> operation.
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    compute_platform: Optional[shared_computeplatform_enum.ComputePlatformEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computePlatform') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
