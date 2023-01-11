package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyEndpointResponse
 * <p/>
**/
public class ModifyEndpointResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Endpoint")
    public Endpoint endpoint;
    public ModifyEndpointResponse withEndpoint(Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}