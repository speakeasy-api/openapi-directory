import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class KinesisStreamSourceConfiguration:
    r"""KinesisStreamSourceConfiguration
    The stream and role Amazon Resource Names (ARNs) for a Kinesis data stream used as the source for a delivery stream.
    """
    
    kinesis_stream_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamARN') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    
