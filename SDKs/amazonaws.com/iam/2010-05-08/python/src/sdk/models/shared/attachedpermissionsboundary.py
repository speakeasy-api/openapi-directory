import dataclasses
from typing import Optional
from enum import Enum
from ..shared import permissionsboundaryattachmenttype_enum as shared_permissionsboundaryattachmenttype_enum


@dataclasses.dataclass
class AttachedPermissionsBoundary:
    r"""AttachedPermissionsBoundary
    <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html\">Permissions boundaries for IAM identities </a> in the <i>IAM User Guide</i>.</p>
    """
    
    permissions_boundary_arn: Optional[str] = dataclasses.field(default=None)
    permissions_boundary_type: Optional[shared_permissionsboundaryattachmenttype_enum.PermissionsBoundaryAttachmentTypeEnum] = dataclasses.field(default=None)
    
