package openapisdk.models.shared;



/**
 * AttachedPermissionsBoundary
 * <p>Contains information about an attached permissions boundary.</p> <p>An attached permissions boundary is a managed policy that has been attached to a user or role to set the permissions boundary.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM identities </a> in the <i>IAM User Guide</i>.</p>
**/
public class AttachedPermissionsBoundary {
    public String permissionsBoundaryArn;
    public AttachedPermissionsBoundary withPermissionsBoundaryArn(String permissionsBoundaryArn) {
        this.permissionsBoundaryArn = permissionsBoundaryArn;
        return this;
    }
    public PermissionsBoundaryAttachmentTypeEnum permissionsBoundaryType;
    public AttachedPermissionsBoundary withPermissionsBoundaryType(PermissionsBoundaryAttachmentTypeEnum permissionsBoundaryType) {
        this.permissionsBoundaryType = permissionsBoundaryType;
        return this;
    }
}