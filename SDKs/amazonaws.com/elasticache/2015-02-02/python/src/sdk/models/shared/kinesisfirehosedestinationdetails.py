import dataclasses
from typing import Optional


@dataclasses.dataclass
class KinesisFirehoseDestinationDetails:
    r"""KinesisFirehoseDestinationDetails
    The configuration details of the Kinesis Data Firehose destination.
    """
    
    delivery_stream: Optional[str] = dataclasses.field(default=None)
    
