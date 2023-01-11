package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * RoleDetail
 * <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
public class RoleDetail {
    public String arn;
    public RoleDetail withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String assumeRolePolicyDocument;
    public RoleDetail withAssumeRolePolicyDocument(String assumeRolePolicyDocument) {
        this.assumeRolePolicyDocument = assumeRolePolicyDocument;
        return this;
    }
    public AttachedPolicy[] attachedManagedPolicies;
    public RoleDetail withAttachedManagedPolicies(AttachedPolicy[] attachedManagedPolicies) {
        this.attachedManagedPolicies = attachedManagedPolicies;
        return this;
    }
    public OffsetDateTime createDate;
    public RoleDetail withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public InstanceProfile[] instanceProfileList;
    public RoleDetail withInstanceProfileList(InstanceProfile[] instanceProfileList) {
        this.instanceProfileList = instanceProfileList;
        return this;
    }
    public String path;
    public RoleDetail withPath(String path) {
        this.path = path;
        return this;
    }
    public AttachedPermissionsBoundary permissionsBoundary;
    public RoleDetail withPermissionsBoundary(AttachedPermissionsBoundary permissionsBoundary) {
        this.permissionsBoundary = permissionsBoundary;
        return this;
    }
    public String roleId;
    public RoleDetail withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    public RoleLastUsed roleLastUsed;
    public RoleDetail withRoleLastUsed(RoleLastUsed roleLastUsed) {
        this.roleLastUsed = roleLastUsed;
        return this;
    }
    public String roleName;
    public RoleDetail withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    public PolicyDetail[] rolePolicyList;
    public RoleDetail withRolePolicyList(PolicyDetail[] rolePolicyList) {
        this.rolePolicyList = rolePolicyList;
        return this;
    }
    public Tag[] tags;
    public RoleDetail withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}