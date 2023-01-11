package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetDevEndpointsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DevEndpoints")
    public DevEndpoint[] devEndpoints;
    public BatchGetDevEndpointsResponse withDevEndpoints(DevEndpoint[] devEndpoints) {
        this.devEndpoints = devEndpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DevEndpointsNotFound")
    public String[] devEndpointsNotFound;
    public BatchGetDevEndpointsResponse withDevEndpointsNotFound(String[] devEndpointsNotFound) {
        this.devEndpointsNotFound = devEndpointsNotFound;
        return this;
    }
}