import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import processor as shared_processor


@dataclass_json
@dataclasses.dataclass
class ProcessingConfiguration:
    r"""ProcessingConfiguration
    Describes a data processing configuration.
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    processors: Optional[list[shared_processor.Processor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Processors') }})
    
