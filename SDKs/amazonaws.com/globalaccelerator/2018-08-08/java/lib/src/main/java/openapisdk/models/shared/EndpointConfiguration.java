package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointConfiguration
 * A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.
**/
public class EndpointConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientIPPreservationEnabled")
    public Boolean clientIPPreservationEnabled;
    public EndpointConfiguration withClientIpPreservationEnabled(Boolean clientIPPreservationEnabled) {
        this.clientIPPreservationEnabled = clientIPPreservationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointId")
    public String endpointId;
    public EndpointConfiguration withEndpointId(String endpointId) {
        this.endpointId = endpointId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Weight")
    public Long weight;
    public EndpointConfiguration withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}