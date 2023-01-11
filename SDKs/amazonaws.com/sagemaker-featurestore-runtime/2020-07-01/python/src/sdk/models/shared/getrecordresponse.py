import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import featurevalue as shared_featurevalue


@dataclass_json
@dataclasses.dataclass
class GetRecordResponse:
    record: Optional[list[shared_featurevalue.FeatureValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Record') }})
    
