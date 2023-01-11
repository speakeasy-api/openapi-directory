import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import preloaddatatype_enum as shared_preloaddatatype_enum


@dataclass_json
@dataclasses.dataclass
class PreloadDataConfig:
    r"""PreloadDataConfig
     The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.
    """
    
    preload_data_type: shared_preloaddatatype_enum.PreloadDataTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreloadDataType') }})
    
