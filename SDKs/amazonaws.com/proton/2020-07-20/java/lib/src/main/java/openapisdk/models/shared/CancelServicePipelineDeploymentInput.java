package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelServicePipelineDeploymentInput {
    @JsonProperty("serviceName")
    public String serviceName;
    public CancelServicePipelineDeploymentInput withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}