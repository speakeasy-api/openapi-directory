import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientpropertiesresult as shared_clientpropertiesresult


@dataclass_json
@dataclasses.dataclass
class DescribeClientPropertiesResult:
    client_properties_list: Optional[list[shared_clientpropertiesresult.ClientPropertiesResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientPropertiesList') }})
    
