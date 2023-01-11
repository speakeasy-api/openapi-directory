package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Role
 * Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
**/
public class Role {
    public String arn;
    public Role withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String assumeRolePolicyDocument;
    public Role withAssumeRolePolicyDocument(String assumeRolePolicyDocument) {
        this.assumeRolePolicyDocument = assumeRolePolicyDocument;
        return this;
    }
    public OffsetDateTime createDate;
    public Role withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String description;
    public Role withDescription(String description) {
        this.description = description;
        return this;
    }
    public Long maxSessionDuration;
    public Role withMaxSessionDuration(Long maxSessionDuration) {
        this.maxSessionDuration = maxSessionDuration;
        return this;
    }
    public String path;
    public Role withPath(String path) {
        this.path = path;
        return this;
    }
    public AttachedPermissionsBoundary permissionsBoundary;
    public Role withPermissionsBoundary(AttachedPermissionsBoundary permissionsBoundary) {
        this.permissionsBoundary = permissionsBoundary;
        return this;
    }
    public String roleId;
    public Role withRoleId(String roleId) {
        this.roleId = roleId;
        return this;
    }
    public RoleLastUsed roleLastUsed;
    public Role withRoleLastUsed(RoleLastUsed roleLastUsed) {
        this.roleLastUsed = roleLastUsed;
        return this;
    }
    public String roleName;
    public Role withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
    public Tag[] tags;
    public Role withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}