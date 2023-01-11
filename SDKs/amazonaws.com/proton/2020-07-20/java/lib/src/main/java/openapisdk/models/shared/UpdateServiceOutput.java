package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServiceOutput {
    @JsonProperty("service")
    public Service service;
    public UpdateServiceOutput withService(Service service) {
        this.service = service;
        return this;
    }
}