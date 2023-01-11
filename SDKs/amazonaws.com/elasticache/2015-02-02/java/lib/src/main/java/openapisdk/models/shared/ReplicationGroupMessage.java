package openapisdk.models.shared;



/**
 * ReplicationGroupMessage
 * Represents the output of a <code>DescribeReplicationGroups</code> operation.
**/
public class ReplicationGroupMessage {
    public String marker;
    public ReplicationGroupMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public ReplicationGroupList[] replicationGroups;
    public ReplicationGroupMessage withReplicationGroups(ReplicationGroupList[] replicationGroups) {
        this.replicationGroups = replicationGroups;
        return this;
    }
}