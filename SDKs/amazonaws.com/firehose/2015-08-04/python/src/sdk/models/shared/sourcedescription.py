import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kinesisstreamsourcedescription as shared_kinesisstreamsourcedescription


@dataclass_json
@dataclasses.dataclass
class SourceDescription:
    r"""SourceDescription
    Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
    """
    
    kinesis_stream_source_description: Optional[shared_kinesisstreamsourcedescription.KinesisStreamSourceDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamSourceDescription') }})
    
