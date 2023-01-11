import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ec2tagfiltertype_enum as shared_ec2tagfiltertype_enum


@dataclass_json
@dataclasses.dataclass
class Ec2TagFilter:
    r"""Ec2TagFilter
    Information about an EC2 tag filter.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    type: Optional[shared_ec2tagfiltertype_enum.Ec2TagFilterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
