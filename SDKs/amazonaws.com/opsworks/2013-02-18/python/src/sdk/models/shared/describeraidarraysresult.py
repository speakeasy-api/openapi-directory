import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import raidarray as shared_raidarray


@dataclass_json
@dataclasses.dataclass
class DescribeRaidArraysResult:
    r"""DescribeRaidArraysResult
    Contains the response to a <code>DescribeRaidArrays</code> request.
    """
    
    raid_arrays: Optional[list[shared_raidarray.RaidArray]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RaidArrays') }})
    
