import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outputformat_enum as shared_outputformat_enum


@dataclass_json
@dataclasses.dataclass
class GenerateTemplateRequest:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    template_format: Optional[shared_outputformat_enum.OutputFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateFormat') }})
    
