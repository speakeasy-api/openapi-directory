import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import s3config as shared_s3config


@dataclass_json
@dataclasses.dataclass
class DataDestination:
    r"""DataDestination
    The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an AWS Key Management Service (KMS) key (optional). 
    """
    
    s3_config: shared_s3config.S3Config = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Config') }})
    
