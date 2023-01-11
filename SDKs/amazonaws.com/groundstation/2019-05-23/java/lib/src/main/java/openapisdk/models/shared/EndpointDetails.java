package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointDetails
 * Information about the endpoint details.
**/
public class EndpointDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public DataflowEndpoint endpoint;
    public EndpointDetails withEndpoint(DataflowEndpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityDetails")
    public SecurityDetails securityDetails;
    public EndpointDetails withSecurityDetails(SecurityDetails securityDetails) {
        this.securityDetails = securityDetails;
        return this;
    }
}