import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_parameterin_enum as shared_beezup_common_parameterin_enum
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3
from ..shared import beezup_common_linkparameterproperty3 as shared_beezup_common_linkparameterproperty3
from ..shared import beezup_common_parametertype_enum as shared_beezup_common_parametertype_enum


@dataclass_json
@dataclasses.dataclass
class BeezUpCommonLinkParameter3:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    in_: Optional[shared_beezup_common_parameterin_enum.BeezUpCommonParameterInEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    lov_link: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovLink') }})
    lov_required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovRequired') }})
    properties: Optional[dict[str, shared_beezup_common_linkparameterproperty3.BeezUpCommonLinkParameterProperty3]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    type: Optional[shared_beezup_common_parametertype_enum.BeezUpCommonParameterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
