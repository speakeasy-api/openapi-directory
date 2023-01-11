import dataclasses
from ..shared import keygroup as shared_keygroup


@dataclasses.dataclass
class KeyGroupSummaryList:
    r"""KeyGroupSummaryList
    Contains information about a key group.
    """
    
    key_group: shared_keygroup.KeyGroup = dataclasses.field()
    
