package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEndpointResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public CreateEndpointResponse withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
}