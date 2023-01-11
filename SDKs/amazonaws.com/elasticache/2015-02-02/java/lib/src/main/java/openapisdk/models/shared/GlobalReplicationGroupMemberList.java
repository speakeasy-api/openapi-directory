package openapisdk.models.shared;



/**
 * GlobalReplicationGroupMemberList
 * A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group. 
**/
public class GlobalReplicationGroupMemberList {
    public AutomaticFailoverStatusEnum automaticFailover;
    public GlobalReplicationGroupMemberList withAutomaticFailover(AutomaticFailoverStatusEnum automaticFailover) {
        this.automaticFailover = automaticFailover;
        return this;
    }
    public String replicationGroupId;
    public GlobalReplicationGroupMemberList withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    public String replicationGroupRegion;
    public GlobalReplicationGroupMemberList withReplicationGroupRegion(String replicationGroupRegion) {
        this.replicationGroupRegion = replicationGroupRegion;
        return this;
    }
    public String role;
    public GlobalReplicationGroupMemberList withRole(String role) {
        this.role = role;
        return this;
    }
    public String status;
    public GlobalReplicationGroupMemberList withStatus(String status) {
        this.status = status;
        return this;
    }
}