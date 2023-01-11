import dataclasses
from typing import Optional
from ..shared import kinesisstreamconfig as shared_kinesisstreamconfig


@dataclasses.dataclass
class EndPoint:
    r"""EndPoint
    Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
    """
    
    stream_type: str = dataclasses.field()
    kinesis_stream_config: Optional[shared_kinesisstreamconfig.KinesisStreamConfig] = dataclasses.field(default=None)
    
