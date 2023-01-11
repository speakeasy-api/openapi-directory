package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReplicationInstancesResponse
 * <p/>
**/
public class DescribeReplicationInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationInstancesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstances")
    public ReplicationInstance[] replicationInstances;
    public DescribeReplicationInstancesResponse withReplicationInstances(ReplicationInstance[] replicationInstances) {
        this.replicationInstances = replicationInstances;
        return this;
    }
}