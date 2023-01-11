import dataclasses
from typing import Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class Ec2SecurityGroupList:
    r"""Ec2SecurityGroupList
    Describes an Amazon EC2 security group.
    """
    
    ec2_security_group_name: Optional[str] = dataclasses.field(default=None)
    ec2_security_group_owner_id: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    
