package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartOnDemandReplicationRunRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public StartOnDemandReplicationRunRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("replicationJobId")
    public String replicationJobId;
    public StartOnDemandReplicationRunRequest withReplicationJobId(String replicationJobId) {
        this.replicationJobId = replicationJobId;
        return this;
    }
}