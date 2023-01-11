import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import renderingenginetype_enum as shared_renderingenginetype_enum


@dataclass_json
@dataclasses.dataclass
class RenderingEngine:
    r"""RenderingEngine
    Information about a rendering engine.
    """
    
    name: Optional[shared_renderingenginetype_enum.RenderingEngineTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
