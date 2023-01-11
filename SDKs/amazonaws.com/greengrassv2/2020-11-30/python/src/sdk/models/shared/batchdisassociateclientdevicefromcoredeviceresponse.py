import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import disassociateclientdevicefromcoredeviceerrorentry as shared_disassociateclientdevicefromcoredeviceerrorentry


@dataclass_json
@dataclasses.dataclass
class BatchDisassociateClientDeviceFromCoreDeviceResponse:
    error_entries: Optional[list[shared_disassociateclientdevicefromcoredeviceerrorentry.DisassociateClientDeviceFromCoreDeviceErrorEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorEntries') }})
    
