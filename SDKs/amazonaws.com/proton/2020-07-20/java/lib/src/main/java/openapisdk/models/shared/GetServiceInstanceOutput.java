package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceInstanceOutput {
    @JsonProperty("serviceInstance")
    public ServiceInstance serviceInstance;
    public GetServiceInstanceOutput withServiceInstance(ServiceInstance serviceInstance) {
        this.serviceInstance = serviceInstance;
        return this;
    }
}