package openapisdk.models.shared;



public class UserGroup {
    public String arn;
    public UserGroup withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public String engine;
    public UserGroup withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public UserGroupPendingChanges pendingChanges;
    public UserGroup withPendingChanges(UserGroupPendingChanges pendingChanges) {
        this.pendingChanges = pendingChanges;
        return this;
    }
    public String[] replicationGroups;
    public UserGroup withReplicationGroups(String[] replicationGroups) {
        this.replicationGroups = replicationGroups;
        return this;
    }
    public String status;
    public UserGroup withStatus(String status) {
        this.status = status;
        return this;
    }
    public String userGroupId;
    public UserGroup withUserGroupId(String userGroupId) {
        this.userGroupId = userGroupId;
        return this;
    }
    public String[] userIds;
    public UserGroup withUserIds(String[] userIds) {
        this.userIds = userIds;
        return this;
    }
}