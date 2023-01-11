import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationitem as shared_configurationitem


@dataclass_json
@dataclasses.dataclass
class GetResourceConfigHistoryResponse:
    r"""GetResourceConfigHistoryResponse
    The output for the <a>GetResourceConfigHistory</a> action.
    """
    
    configuration_items: Optional[list[shared_configurationitem.ConfigurationItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationItems') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
