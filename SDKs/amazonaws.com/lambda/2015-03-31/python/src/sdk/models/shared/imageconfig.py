import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImageConfig:
    r"""ImageConfig
    Configuration values that override the container image Dockerfile settings. See <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms\">Container settings</a>. 
    """
    
    command: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    entry_point: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntryPoint') }})
    working_directory: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkingDirectory') }})
    
