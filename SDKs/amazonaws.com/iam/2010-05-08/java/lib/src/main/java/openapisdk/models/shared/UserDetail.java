package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * UserDetail
 * <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
public class UserDetail {
    public String arn;
    public UserDetail withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public AttachedPolicy[] attachedManagedPolicies;
    public UserDetail withAttachedManagedPolicies(AttachedPolicy[] attachedManagedPolicies) {
        this.attachedManagedPolicies = attachedManagedPolicies;
        return this;
    }
    public OffsetDateTime createDate;
    public UserDetail withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String[] groupList;
    public UserDetail withGroupList(String[] groupList) {
        this.groupList = groupList;
        return this;
    }
    public String path;
    public UserDetail withPath(String path) {
        this.path = path;
        return this;
    }
    public AttachedPermissionsBoundary permissionsBoundary;
    public UserDetail withPermissionsBoundary(AttachedPermissionsBoundary permissionsBoundary) {
        this.permissionsBoundary = permissionsBoundary;
        return this;
    }
    public Tag[] tags;
    public UserDetail withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    public String userId;
    public UserDetail withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    public String userName;
    public UserDetail withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    public PolicyDetail[] userPolicyList;
    public UserDetail withUserPolicyList(PolicyDetail[] userPolicyList) {
        this.userPolicyList = userPolicyList;
        return this;
    }
}