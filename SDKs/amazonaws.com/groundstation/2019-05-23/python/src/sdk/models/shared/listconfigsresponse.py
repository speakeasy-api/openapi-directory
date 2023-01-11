import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configlistitem as shared_configlistitem


@dataclass_json
@dataclasses.dataclass
class ListConfigsResponse:
    r"""ListConfigsResponse
    <p/>
    """
    
    config_list: Optional[list[shared_configlistitem.ConfigListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
