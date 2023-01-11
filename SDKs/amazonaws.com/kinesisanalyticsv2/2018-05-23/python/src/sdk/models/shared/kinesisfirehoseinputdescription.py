import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class KinesisFirehoseInputDescription:
    r"""KinesisFirehoseInputDescription
    Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration. 
    """
    
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    
