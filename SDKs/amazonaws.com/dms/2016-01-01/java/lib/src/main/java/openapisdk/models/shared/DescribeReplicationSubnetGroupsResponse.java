package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReplicationSubnetGroupsResponse
 * <p/>
**/
public class DescribeReplicationSubnetGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationSubnetGroupsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationSubnetGroups")
    public ReplicationSubnetGroup[] replicationSubnetGroups;
    public DescribeReplicationSubnetGroupsResponse withReplicationSubnetGroups(ReplicationSubnetGroup[] replicationSubnetGroups) {
        this.replicationSubnetGroups = replicationSubnetGroups;
        return this;
    }
}