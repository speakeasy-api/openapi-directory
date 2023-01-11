import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import upsolvers3outputformatconfig as shared_upsolvers3outputformatconfig


@dataclass_json
@dataclasses.dataclass
class UpsolverDestinationProperties:
    r"""UpsolverDestinationProperties
     The properties that are applied when Upsolver is used as a destination. 
    """
    
    bucket_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    s3_output_format_config: shared_upsolvers3outputformatconfig.UpsolverS3OutputFormatConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3OutputFormatConfig') }})
    bucket_prefix: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    
