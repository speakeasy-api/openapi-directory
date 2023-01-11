import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualserviceref as shared_virtualserviceref


@dataclass_json
@dataclasses.dataclass
class ListVirtualServicesOutput:
    r"""ListVirtualServicesOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    virtual_services: list[shared_virtualserviceref.VirtualServiceRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualServices') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
