package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateContainerAgentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public UpdateContainerAgentRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonProperty("containerInstance")
    public String containerInstance;
    public UpdateContainerAgentRequest withContainerInstance(String containerInstance) {
        this.containerInstance = containerInstance;
        return this;
    }
}