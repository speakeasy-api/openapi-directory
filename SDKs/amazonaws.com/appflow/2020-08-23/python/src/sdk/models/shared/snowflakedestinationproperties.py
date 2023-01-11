import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorhandlingconfig as shared_errorhandlingconfig


@dataclass_json
@dataclasses.dataclass
class SnowflakeDestinationProperties:
    r"""SnowflakeDestinationProperties
     The properties that are applied when Snowflake is being used as a destination. 
    """
    
    intermediate_bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intermediateBucketName') }})
    object: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    bucket_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    error_handling_config: Optional[shared_errorhandlingconfig.ErrorHandlingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorHandlingConfig') }})
    
