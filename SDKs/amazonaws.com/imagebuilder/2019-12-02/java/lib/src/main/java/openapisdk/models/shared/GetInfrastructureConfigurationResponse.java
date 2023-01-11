package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetInfrastructureConfigurationResponse
 * GetInfrastructureConfiguration response object.
**/
public class GetInfrastructureConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infrastructureConfiguration")
    public InfrastructureConfiguration infrastructureConfiguration;
    public GetInfrastructureConfigurationResponse withInfrastructureConfiguration(InfrastructureConfiguration infrastructureConfiguration) {
        this.infrastructureConfiguration = infrastructureConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public GetInfrastructureConfigurationResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}