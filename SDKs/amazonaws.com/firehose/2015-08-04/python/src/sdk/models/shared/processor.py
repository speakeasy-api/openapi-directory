import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import processorparameter as shared_processorparameter
from ..shared import processortype_enum as shared_processortype_enum


@dataclass_json
@dataclasses.dataclass
class Processor:
    r"""Processor
    Describes a data processor.
    """
    
    type: shared_processortype_enum.ProcessorTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    parameters: Optional[list[shared_processorparameter.ProcessorParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    
