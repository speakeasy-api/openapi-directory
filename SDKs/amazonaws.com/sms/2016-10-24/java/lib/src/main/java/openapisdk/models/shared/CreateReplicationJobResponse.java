package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateReplicationJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationJobId")
    public String replicationJobId;
    public CreateReplicationJobResponse withReplicationJobId(String replicationJobId) {
        this.replicationJobId = replicationJobId;
        return this;
    }
}