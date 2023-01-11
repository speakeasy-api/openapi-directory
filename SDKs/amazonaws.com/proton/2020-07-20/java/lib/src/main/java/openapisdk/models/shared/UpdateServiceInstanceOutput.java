package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServiceInstanceOutput {
    @JsonProperty("serviceInstance")
    public ServiceInstance serviceInstance;
    public UpdateServiceInstanceOutput withServiceInstance(ServiceInstance serviceInstance) {
        this.serviceInstance = serviceInstance;
        return this;
    }
}