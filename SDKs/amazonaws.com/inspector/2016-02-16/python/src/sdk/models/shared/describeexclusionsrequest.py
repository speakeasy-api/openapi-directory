import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locale_enum as shared_locale_enum


@dataclass_json
@dataclasses.dataclass
class DescribeExclusionsRequest:
    exclusion_arns: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionArns') }})
    locale: Optional[shared_locale_enum.LocaleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    
