package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateServiceOutput {
    @JsonProperty("service")
    public Service service;
    public CreateServiceOutput withService(Service service) {
        this.service = service;
        return this;
    }
}