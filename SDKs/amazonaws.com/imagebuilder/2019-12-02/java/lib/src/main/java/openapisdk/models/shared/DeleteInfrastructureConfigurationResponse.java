package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteInfrastructureConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infrastructureConfigurationArn")
    public String infrastructureConfigurationArn;
    public DeleteInfrastructureConfigurationResponse withInfrastructureConfigurationArn(String infrastructureConfigurationArn) {
        this.infrastructureConfigurationArn = infrastructureConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DeleteInfrastructureConfigurationResponse withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}