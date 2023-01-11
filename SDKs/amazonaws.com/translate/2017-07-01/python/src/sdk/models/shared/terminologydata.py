import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import terminologydataformat_enum as shared_terminologydataformat_enum


@dataclass_json
@dataclasses.dataclass
class TerminologyData:
    r"""TerminologyData
    The data associated with the custom terminology.
    """
    
    file: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('File') }})
    format: shared_terminologydataformat_enum.TerminologyDataFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    
