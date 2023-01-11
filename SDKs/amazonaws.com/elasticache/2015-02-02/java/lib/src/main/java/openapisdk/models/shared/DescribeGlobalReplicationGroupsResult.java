package openapisdk.models.shared;



public class DescribeGlobalReplicationGroupsResult {
    public GlobalReplicationGroupList[] globalReplicationGroups;
    public DescribeGlobalReplicationGroupsResult withGlobalReplicationGroups(GlobalReplicationGroupList[] globalReplicationGroups) {
        this.globalReplicationGroups = globalReplicationGroups;
        return this;
    }
    public String marker;
    public DescribeGlobalReplicationGroupsResult withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}