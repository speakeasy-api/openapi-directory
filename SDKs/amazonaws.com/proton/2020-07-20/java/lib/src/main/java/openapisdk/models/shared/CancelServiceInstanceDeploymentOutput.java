package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelServiceInstanceDeploymentOutput {
    @JsonProperty("serviceInstance")
    public ServiceInstance serviceInstance;
    public CancelServiceInstanceDeploymentOutput withServiceInstance(ServiceInstance serviceInstance) {
        this.serviceInstance = serviceInstance;
        return this;
    }
}