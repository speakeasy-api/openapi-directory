package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDevEndpointRequest {
    @JsonProperty("EndpointName")
    public String endpointName;
    public DeleteDevEndpointRequest withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
}