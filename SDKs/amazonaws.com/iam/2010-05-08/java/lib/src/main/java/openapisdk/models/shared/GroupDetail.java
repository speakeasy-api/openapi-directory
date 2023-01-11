package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * GroupDetail
 * <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
**/
public class GroupDetail {
    public String arn;
    public GroupDetail withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public AttachedPolicy[] attachedManagedPolicies;
    public GroupDetail withAttachedManagedPolicies(AttachedPolicy[] attachedManagedPolicies) {
        this.attachedManagedPolicies = attachedManagedPolicies;
        return this;
    }
    public OffsetDateTime createDate;
    public GroupDetail withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String groupId;
    public GroupDetail withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    public String groupName;
    public GroupDetail withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    public PolicyDetail[] groupPolicyList;
    public GroupDetail withGroupPolicyList(PolicyDetail[] groupPolicyList) {
        this.groupPolicyList = groupPolicyList;
        return this;
    }
    public String path;
    public GroupDetail withPath(String path) {
        this.path = path;
        return this;
    }
}