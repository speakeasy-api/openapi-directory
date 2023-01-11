import dataclasses
from typing import Optional


@dataclasses.dataclass
class PolicyGroup:
    r"""PolicyGroup
    <p>Contains information about a group that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html\">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
    """
    
    group_id: Optional[str] = dataclasses.field(default=None)
    group_name: Optional[str] = dataclasses.field(default=None)
    
