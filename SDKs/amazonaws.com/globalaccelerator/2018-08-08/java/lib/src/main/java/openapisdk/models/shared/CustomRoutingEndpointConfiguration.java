package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomRoutingEndpointConfiguration
 * The list of endpoint objects. For custom routing, this is a list of virtual private cloud (VPC) subnet IDs.
**/
public class CustomRoutingEndpointConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointId")
    public String endpointId;
    public CustomRoutingEndpointConfiguration withEndpointId(String endpointId) {
        this.endpointId = endpointId;
        return this;
    }
}