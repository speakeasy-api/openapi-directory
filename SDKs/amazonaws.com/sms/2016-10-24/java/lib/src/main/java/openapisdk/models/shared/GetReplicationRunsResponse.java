package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReplicationRunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetReplicationRunsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationJob")
    public ReplicationJob replicationJob;
    public GetReplicationRunsResponse withReplicationJob(ReplicationJob replicationJob) {
        this.replicationJob = replicationJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationRunList")
    public ReplicationRun[] replicationRunList;
    public GetReplicationRunsResponse withReplicationRunList(ReplicationRun[] replicationRunList) {
        this.replicationRunList = replicationRunList;
        return this;
    }
}