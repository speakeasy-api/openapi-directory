package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeReplicationTasksResponse
 * <p/>
**/
public class DescribeReplicationTasksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationTasksResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTasks")
    public ReplicationTask[] replicationTasks;
    public DescribeReplicationTasksResponse withReplicationTasks(ReplicationTask[] replicationTasks) {
        this.replicationTasks = replicationTasks;
        return this;
    }
}