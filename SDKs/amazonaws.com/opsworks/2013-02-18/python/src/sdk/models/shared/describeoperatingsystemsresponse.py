import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operatingsystem as shared_operatingsystem


@dataclass_json
@dataclasses.dataclass
class DescribeOperatingSystemsResponse:
    r"""DescribeOperatingSystemsResponse
    The response to a <code>DescribeOperatingSystems</code> request.
    """
    
    operating_systems: Optional[list[shared_operatingsystem.OperatingSystem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystems') }})
    
