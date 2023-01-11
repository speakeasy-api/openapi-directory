import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import associateclientdevicewithcoredeviceerrorentry as shared_associateclientdevicewithcoredeviceerrorentry


@dataclass_json
@dataclasses.dataclass
class BatchAssociateClientDeviceWithCoreDeviceResponse:
    error_entries: Optional[list[shared_associateclientdevicewithcoredeviceerrorentry.AssociateClientDeviceWithCoreDeviceErrorEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorEntries') }})
    
