import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import algorithmspec_enum as shared_algorithmspec_enum
from ..shared import wrappingkeyspec_enum as shared_wrappingkeyspec_enum


@dataclass_json
@dataclasses.dataclass
class GetParametersForImportRequest:
    key_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    wrapping_algorithm: shared_algorithmspec_enum.AlgorithmSpecEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WrappingAlgorithm') }})
    wrapping_key_spec: shared_wrappingkeyspec_enum.WrappingKeySpecEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WrappingKeySpec') }})
    
