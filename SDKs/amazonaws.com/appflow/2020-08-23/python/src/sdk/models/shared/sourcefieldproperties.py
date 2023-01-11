import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SourceFieldProperties:
    r"""SourceFieldProperties
     The properties that can be applied to a field when the connector is being used as a source. 
    """
    
    is_queryable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isQueryable') }})
    is_retrievable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRetrievable') }})
    
