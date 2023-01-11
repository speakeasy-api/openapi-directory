import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OutputDataConfig:
    r"""OutputDataConfig
    <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
    """
    
    s3_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
