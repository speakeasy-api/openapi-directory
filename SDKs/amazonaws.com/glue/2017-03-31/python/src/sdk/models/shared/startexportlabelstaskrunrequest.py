import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StartExportLabelsTaskRunRequest:
    output_s3_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3Path') }})
    transform_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformId') }})
    
