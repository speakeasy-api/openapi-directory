import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ec2tagfilter as shared_ec2tagfilter


@dataclass_json
@dataclasses.dataclass
class Ec2TagSet:
    r"""Ec2TagSet
    Information about groups of EC2 instance tags.
    """
    
    ec2_tag_set_list: Optional[list[list[shared_ec2tagfilter.Ec2TagFilter]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ec2TagSetList') }})
    
