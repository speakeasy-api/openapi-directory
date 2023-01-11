import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DatasetSchema:
    r"""DatasetSchema
    Provides information about the data schema used with the given dataset. 
    """
    
    inline_data_schema: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InlineDataSchema') }})
    
