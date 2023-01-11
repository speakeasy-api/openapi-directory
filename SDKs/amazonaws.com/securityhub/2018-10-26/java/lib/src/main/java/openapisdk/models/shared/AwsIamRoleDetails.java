package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamRoleDetails
 * Contains information about an IAM role, including all of the role's policies.
**/
public class AwsIamRoleDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssumeRolePolicyDocument")
    public String assumeRolePolicyDocument;
    public AwsIamRoleDetails withAssumeRolePolicyDocument(String assumeRolePolicyDocument) {
        this.assumeRolePolicyDocument = assumeRolePolicyDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttachedManagedPolicies")
    public AwsIamAttachedManagedPolicy[] attachedManagedPolicies;
    public AwsIamRoleDetails withAttachedManagedPolicies(AwsIamAttachedManagedPolicy[] attachedManagedPolicies) {
        this.attachedManagedPolicies = attachedManagedPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateDate")
    public String createDate;
    public AwsIamRoleDetails withCreateDate(String createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceProfileList")
    public AwsIamInstanceProfile[] instanceProfileList;
    public AwsIamRoleDetails withInstanceProfileList(AwsIamInstanceProfile[] instanceProfileList) {
        this.instanceProfileList = instanceProfileList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxSessionDuration")
    public Long maxSessionDuration;
    public AwsIamRoleDetails withMaxSessionDuration(Long maxSessionDuration) {
        this.maxSessionDuration = maxSessionDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Path")
    public String path;
    public AwsIamRoleDetails withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PermissionsBoundary")
    public AwsIamPermissionsBoundary permissionsBoundary;
    public AwsIamRoleDetails withPermissionsBoundary(AwsIamPermissionsBoundary permissionsBoundary) {
        this.permissionsBoundary = permissionsBoundary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleId")
    public String roleId;
    public AwsIamRoleDetails withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleName")
    public String roleName;
    public AwsIamRoleDetails withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RolePolicyList")
    public AwsIamRolePolicy[] rolePolicyList;
    public AwsIamRoleDetails withRolePolicyList(AwsIamRolePolicy[] rolePolicyList) {
        this.rolePolicyList = rolePolicyList;
        return this;
    }
}