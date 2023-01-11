import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import continuousexportdescription as shared_continuousexportdescription


@dataclass_json
@dataclasses.dataclass
class DescribeContinuousExportsResponse:
    descriptions: Optional[list[shared_continuousexportdescription.ContinuousExportDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
