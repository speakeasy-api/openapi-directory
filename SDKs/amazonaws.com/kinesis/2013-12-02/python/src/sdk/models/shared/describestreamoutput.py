import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import streamdescription as shared_streamdescription


@dataclass_json
@dataclasses.dataclass
class DescribeStreamOutput:
    r"""DescribeStreamOutput
    Represents the output for <code>DescribeStream</code>.
    """
    
    stream_description: shared_streamdescription.StreamDescription = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamDescription') }})
    
