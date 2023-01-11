import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3configuration as shared_s3configuration


@dataclass_json
@dataclasses.dataclass
class OutputDataConfig:
    r"""OutputDataConfig
    The output data configuration that was supplied when the export job was created.
    """
    
    s3_configuration: Optional[shared_s3configuration.S3Configuration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Configuration') }})
    
