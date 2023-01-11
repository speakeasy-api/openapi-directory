package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateClusterResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterId")
    public String clusterId;
    public CreateClusterResult withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}