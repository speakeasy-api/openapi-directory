import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImportLabelsTaskRunProperties:
    r"""ImportLabelsTaskRunProperties
    Specifies configuration properties for an importing labels task run.
    """
    
    input_s3_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputS3Path') }})
    replace: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replace') }})
    
