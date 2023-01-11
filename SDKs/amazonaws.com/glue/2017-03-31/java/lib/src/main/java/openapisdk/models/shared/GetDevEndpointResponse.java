package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDevEndpointResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DevEndpoint")
    public DevEndpoint devEndpoint;
    public GetDevEndpointResponse withDevEndpoint(DevEndpoint devEndpoint) {
        this.devEndpoint = devEndpoint;
        return this;
    }
}