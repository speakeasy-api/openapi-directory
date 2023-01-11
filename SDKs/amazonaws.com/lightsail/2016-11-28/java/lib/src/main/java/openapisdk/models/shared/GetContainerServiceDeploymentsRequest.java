package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetContainerServiceDeploymentsRequest {
    @JsonProperty("serviceName")
    public String serviceName;
    public GetContainerServiceDeploymentsRequest withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}