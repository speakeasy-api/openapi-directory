import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import engineversioninfo as shared_engineversioninfo


@dataclass_json
@dataclasses.dataclass
class DescribeEngineVersionsResponse:
    engine_versions: Optional[list[shared_engineversioninfo.EngineVersionInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngineVersions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
