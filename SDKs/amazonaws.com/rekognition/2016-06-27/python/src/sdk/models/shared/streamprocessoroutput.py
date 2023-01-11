import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kinesisdatastream as shared_kinesisdatastream


@dataclass_json
@dataclasses.dataclass
class StreamProcessorOutput:
    r"""StreamProcessorOutput
    Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
    """
    
    kinesis_data_stream: Optional[shared_kinesisdatastream.KinesisDataStream] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisDataStream') }})
    
