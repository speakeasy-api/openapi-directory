package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeReplicationInstanceTaskLogsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeReplicationInstanceTaskLogsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public DescribeReplicationInstanceTaskLogsResponse withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceTaskLogs")
    public ReplicationInstanceTaskLog[] replicationInstanceTaskLogs;
    public DescribeReplicationInstanceTaskLogsResponse withReplicationInstanceTaskLogs(ReplicationInstanceTaskLog[] replicationInstanceTaskLogs) {
        this.replicationInstanceTaskLogs = replicationInstanceTaskLogs;
        return this;
    }
}