import dataclasses
from typing import Optional


@dataclasses.dataclass
class ClusterIamRoleList:
    r"""ClusterIamRoleList
    An Identity and Access Management (IAM) role that can be used by the associated Amazon Redshift cluster to access other Amazon Web Services services.
    """
    
    apply_status: Optional[str] = dataclasses.field(default=None)
    iam_role_arn: Optional[str] = dataclasses.field(default=None)
    
