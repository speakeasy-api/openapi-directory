package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetDevEndpointsRequest {
    @JsonProperty("DevEndpointNames")
    public String[] devEndpointNames;
    public BatchGetDevEndpointsRequest withDevEndpointNames(String[] devEndpointNames) {
        this.devEndpointNames = devEndpointNames;
        return this;
    }
}