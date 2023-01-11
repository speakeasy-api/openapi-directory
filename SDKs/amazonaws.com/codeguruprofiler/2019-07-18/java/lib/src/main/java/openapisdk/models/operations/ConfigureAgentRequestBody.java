package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigureAgentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleetInstanceId")
    public String fleetInstanceId;
    public ConfigureAgentRequestBody withFleetInstanceId(String fleetInstanceId) {
        this.fleetInstanceId = fleetInstanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public ConfigureAgentRequestBody withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
}