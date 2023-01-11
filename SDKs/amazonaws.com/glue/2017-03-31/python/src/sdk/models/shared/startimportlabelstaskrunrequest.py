import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartImportLabelsTaskRunRequest:
    input_s3_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputS3Path') }})
    transform_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformId') }})
    replace_all_labels: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplaceAllLabels') }})
    
