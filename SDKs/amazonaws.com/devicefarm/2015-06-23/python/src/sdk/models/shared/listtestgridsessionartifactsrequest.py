import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridsessionartifactcategory_enum as shared_testgridsessionartifactcategory_enum


@dataclass_json
@dataclasses.dataclass
class ListTestGridSessionArtifactsRequest:
    session_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionArn') }})
    max_result: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResult') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    type: Optional[shared_testgridsessionartifactcategory_enum.TestGridSessionArtifactCategoryEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
