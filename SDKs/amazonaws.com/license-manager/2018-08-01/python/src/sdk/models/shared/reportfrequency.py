import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfrequencytype_enum as shared_reportfrequencytype_enum


@dataclass_json
@dataclasses.dataclass
class ReportFrequency:
    r"""ReportFrequency
    Details on how frequently reports are generated.
    """
    
    period: Optional[shared_reportfrequencytype_enum.ReportFrequencyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
