import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compareoptions_enum as shared_compareoptions_enum
from ..shared import duplicateproductvaluestrategy_enum as shared_duplicateproductvaluestrategy_enum


@dataclass_json
@dataclasses.dataclass
class DuplicateProductValueConfiguration:
    r"""DuplicateProductValueConfiguration
    Describe how you want to manage the duplication of the product value
    """
    
    compare_options: shared_compareoptions_enum.CompareOptionsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compareOptions') }})
    strategy: shared_duplicateproductvaluestrategy_enum.DuplicateProductValueStrategyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    
