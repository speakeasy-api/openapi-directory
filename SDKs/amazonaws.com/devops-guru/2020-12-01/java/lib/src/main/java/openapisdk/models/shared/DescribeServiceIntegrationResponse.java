package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServiceIntegrationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceIntegration")
    public ServiceIntegrationConfig serviceIntegration;
    public DescribeServiceIntegrationResponse withServiceIntegration(ServiceIntegrationConfig serviceIntegration) {
        this.serviceIntegration = serviceIntegration;
        return this;
    }
}