import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientproperties as shared_clientproperties


@dataclass_json
@dataclasses.dataclass
class ClientPropertiesResult:
    r"""ClientPropertiesResult
    Information about the Amazon WorkSpaces client.
    """
    
    client_properties: Optional[shared_clientproperties.ClientProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientProperties') }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    
