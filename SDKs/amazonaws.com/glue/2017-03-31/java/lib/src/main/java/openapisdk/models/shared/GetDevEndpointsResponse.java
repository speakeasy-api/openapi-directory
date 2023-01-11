package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDevEndpointsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DevEndpoints")
    public DevEndpoint[] devEndpoints;
    public GetDevEndpointsResponse withDevEndpoints(DevEndpoint[] devEndpoints) {
        this.devEndpoints = devEndpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetDevEndpointsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}