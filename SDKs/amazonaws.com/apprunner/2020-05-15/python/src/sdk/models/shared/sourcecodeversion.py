import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sourcecodeversiontype_enum as shared_sourcecodeversiontype_enum


@dataclass_json
@dataclasses.dataclass
class SourceCodeVersion:
    r"""SourceCodeVersion
    Identifies a version of code that AWS App Runner refers to within a source code repository.
    """
    
    type: shared_sourcecodeversiontype_enum.SourceCodeVersionTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
