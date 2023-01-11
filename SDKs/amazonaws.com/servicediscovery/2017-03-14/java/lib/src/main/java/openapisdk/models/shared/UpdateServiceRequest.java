package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServiceRequest {
    @JsonProperty("Id")
    public String id;
    public UpdateServiceRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Service")
    public ServiceChange service;
    public UpdateServiceRequest withService(ServiceChange service) {
        this.service = service;
        return this;
    }
}