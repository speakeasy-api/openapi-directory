import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile:
    r"""ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile
    The IAM instance profile.
    """
    
    arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation:
    r"""ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation
    Information about the IAM instance profile association.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    iam_instance_profile: Optional[ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    timestamp: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ReplaceIamInstanceProfileAssociationResult:
    iam_instance_profile_association: Optional[ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation] = dataclasses.field(default=None)
    
