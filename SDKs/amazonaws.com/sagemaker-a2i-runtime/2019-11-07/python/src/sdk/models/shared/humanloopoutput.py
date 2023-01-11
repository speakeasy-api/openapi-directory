import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HumanLoopOutput:
    r"""HumanLoopOutput
    Information about where the human output will be stored.
    """
    
    output_s3_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3Uri') }})
    
