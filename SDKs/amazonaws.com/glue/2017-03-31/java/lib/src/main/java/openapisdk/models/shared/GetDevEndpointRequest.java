package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDevEndpointRequest {
    @JsonProperty("EndpointName")
    public String endpointName;
    public GetDevEndpointRequest withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
}