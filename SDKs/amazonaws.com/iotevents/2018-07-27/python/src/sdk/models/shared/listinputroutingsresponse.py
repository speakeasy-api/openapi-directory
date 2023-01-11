import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routedresource as shared_routedresource


@dataclass_json
@dataclasses.dataclass
class ListInputRoutingsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    routed_resources: Optional[list[shared_routedresource.RoutedResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routedResources') }})
    
