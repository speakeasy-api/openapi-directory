import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile:
    r"""DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile
    The IAM instance profile.
    """
    
    arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateIamInstanceProfileResultIamInstanceProfileAssociation:
    r"""DisassociateIamInstanceProfileResultIamInstanceProfileAssociation
    Information about the IAM instance profile association.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    iam_instance_profile: Optional[DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    timestamp: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DisassociateIamInstanceProfileResult:
    iam_instance_profile_association: Optional[DisassociateIamInstanceProfileResultIamInstanceProfileAssociation] = dataclasses.field(default=None)
    
