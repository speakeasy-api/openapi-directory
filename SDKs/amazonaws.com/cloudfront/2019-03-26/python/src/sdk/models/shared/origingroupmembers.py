import dataclasses
from ..shared import origingroupmemberlist as shared_origingroupmemberlist


@dataclasses.dataclass
class OriginGroupMembers:
    r"""OriginGroupMembers
    A complex data type for the origins included in an origin group.
    """
    
    items: list[shared_origingroupmemberlist.OriginGroupMemberList] = dataclasses.field()
    quantity: int = dataclasses.field()
    
