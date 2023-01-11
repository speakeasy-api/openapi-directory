import dataclasses



@dataclasses.dataclass
class KinesisStreamConfig:
    r"""KinesisStreamConfig
    Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
    """
    
    role_arn: str = dataclasses.field()
    stream_arn: str = dataclasses.field()
    
