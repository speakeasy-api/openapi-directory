import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mltransform as shared_mltransform


@dataclass_json
@dataclasses.dataclass
class GetMlTransformsResponse:
    transforms: list[shared_mltransform.MlTransform] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transforms') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
