import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile:
    r"""AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile
    The IAM instance profile.
    """
    
    arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateIamInstanceProfileResultIamInstanceProfileAssociation:
    r"""AssociateIamInstanceProfileResultIamInstanceProfileAssociation
    Information about the IAM instance profile association.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    iam_instance_profile: Optional[AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    timestamp: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateIamInstanceProfileResult:
    iam_instance_profile_association: Optional[AssociateIamInstanceProfileResultIamInstanceProfileAssociation] = dataclasses.field(default=None)
    
