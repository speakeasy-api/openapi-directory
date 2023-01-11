import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointsetting as shared_endpointsetting


@dataclass_json
@dataclasses.dataclass
class DescribeEndpointSettingsResponse:
    endpoint_settings: Optional[list[shared_endpointsetting.EndpointSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointSettings') }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
