package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceInstanceInput {
    @JsonProperty("name")
    public String name;
    public GetServiceInstanceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public GetServiceInstanceInput withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}