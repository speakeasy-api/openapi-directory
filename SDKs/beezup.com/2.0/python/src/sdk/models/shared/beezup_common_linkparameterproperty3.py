import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3
from ..shared import beezup_common_parametertype_enum as shared_beezup_common_parametertype_enum


@dataclass_json
@dataclasses.dataclass
class BeezUpCommonLinkParameterProperty3:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    lov_link: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovLink') }})
    lov_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovRequired') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    type: Optional[shared_beezup_common_parametertype_enum.BeezUpCommonParameterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
