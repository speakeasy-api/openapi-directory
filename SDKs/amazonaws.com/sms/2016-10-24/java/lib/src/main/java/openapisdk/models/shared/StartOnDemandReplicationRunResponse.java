package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartOnDemandReplicationRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationRunId")
    public String replicationRunId;
    public StartOnDemandReplicationRunResponse withReplicationRunId(String replicationRunId) {
        this.replicationRunId = replicationRunId;
        return this;
    }
}