import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import custompluginsummary as shared_custompluginsummary


@dataclass_json
@dataclasses.dataclass
class ListCustomPluginsResponse:
    custom_plugins: Optional[list[shared_custompluginsummary.CustomPluginSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPlugins') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
