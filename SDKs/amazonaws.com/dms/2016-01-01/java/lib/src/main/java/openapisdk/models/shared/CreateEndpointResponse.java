package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEndpointResponse
 * <p/>
**/
public class CreateEndpointResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoint")
    public Endpoint endpoint;
    public CreateEndpointResponse withEndpoint(Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}