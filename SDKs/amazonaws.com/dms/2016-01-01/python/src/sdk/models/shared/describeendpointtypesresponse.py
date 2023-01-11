import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import supportedendpointtype as shared_supportedendpointtype


@dataclass_json
@dataclasses.dataclass
class DescribeEndpointTypesResponse:
    r"""DescribeEndpointTypesResponse
    <p/>
    """
    
    marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    supported_endpoint_types: Optional[list[shared_supportedendpointtype.SupportedEndpointType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedEndpointTypes') }})
    
