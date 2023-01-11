package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEndpointResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointProperties")
    public EndpointProperties endpointProperties;
    public DescribeEndpointResponse withEndpointProperties(EndpointProperties endpointProperties) {
        this.endpointProperties = endpointProperties;
        return this;
    }
}