import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import volume as shared_volume


@dataclass_json
@dataclasses.dataclass
class DescribeVolumesResult:
    r"""DescribeVolumesResult
    Contains the response to a <code>DescribeVolumes</code> request.
    """
    
    volumes: Optional[list[shared_volume.Volume]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Volumes') }})
    
