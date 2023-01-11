package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelServiceInstanceDeploymentInput {
    @JsonProperty("serviceInstanceName")
    public String serviceInstanceName;
    public CancelServiceInstanceDeploymentInput withServiceInstanceName(String serviceInstanceName) {
        this.serviceInstanceName = serviceInstanceName;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public CancelServiceInstanceDeploymentInput withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}