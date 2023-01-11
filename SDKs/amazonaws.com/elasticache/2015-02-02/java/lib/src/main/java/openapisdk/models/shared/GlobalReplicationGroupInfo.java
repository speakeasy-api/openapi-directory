package openapisdk.models.shared;



/**
 * GlobalReplicationGroupInfo
 * The name of the Global datastore and role of this replication group in the Global datastore.
**/
public class GlobalReplicationGroupInfo {
    public String globalReplicationGroupId;
    public GlobalReplicationGroupInfo withGlobalReplicationGroupId(String globalReplicationGroupId) {
        this.globalReplicationGroupId = globalReplicationGroupId;
        return this;
    }
    public String globalReplicationGroupMemberRole;
    public GlobalReplicationGroupInfo withGlobalReplicationGroupMemberRole(String globalReplicationGroupMemberRole) {
        this.globalReplicationGroupMemberRole = globalReplicationGroupMemberRole;
        return this;
    }
}