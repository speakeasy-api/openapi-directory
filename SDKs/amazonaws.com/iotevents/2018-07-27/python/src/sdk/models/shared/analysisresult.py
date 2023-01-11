import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import analysisresultlevel_enum as shared_analysisresultlevel_enum
from ..shared import analysisresultlocation as shared_analysisresultlocation


@dataclass_json
@dataclasses.dataclass
class AnalysisResult:
    r"""AnalysisResult
    Contains the result of the analysis.
    """
    
    level: Optional[shared_analysisresultlevel_enum.AnalysisResultLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    locations: Optional[list[shared_analysisresultlocation.AnalysisResultLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
