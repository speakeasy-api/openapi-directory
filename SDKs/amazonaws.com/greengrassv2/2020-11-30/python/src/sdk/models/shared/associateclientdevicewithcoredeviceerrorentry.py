import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssociateClientDeviceWithCoreDeviceErrorEntry:
    r"""AssociateClientDeviceWithCoreDeviceErrorEntry
    Contains an error that occurs from a request to associate a client device with a core device. The <a href=\"https://docs.aws.amazon.com/greengrass/v2/APIReference/API_BatchAssociateClientDeviceWithCoreDevice.html\">BatchAssociateClientDeviceWithCoreDevice</a> operation returns a list of these errors.
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    thing_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    
