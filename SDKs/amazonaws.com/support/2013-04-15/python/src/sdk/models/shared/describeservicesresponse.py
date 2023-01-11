import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import service as shared_service


@dataclass_json
@dataclasses.dataclass
class DescribeServicesResponse:
    r"""DescribeServicesResponse
    The list of AWS services returned by the <a>DescribeServices</a> operation.
    """
    
    services: Optional[list[shared_service.Service]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    
