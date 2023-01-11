package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEndpointRequest {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public DeleteEndpointRequest withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
}