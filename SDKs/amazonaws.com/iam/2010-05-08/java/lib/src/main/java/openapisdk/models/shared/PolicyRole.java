package openapisdk.models.shared;



/**
 * PolicyRole
 * <p>Contains information about a role that a managed policy is attached to.</p> <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
**/
public class PolicyRole {
    public String roleId;
    public PolicyRole withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    public String roleName;
    public PolicyRole withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
}