import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InputDataConfig:
    r"""InputDataConfig
    The input configuration properties for requesting a batch translation job.
    """
    
    content_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }})
    s3_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
