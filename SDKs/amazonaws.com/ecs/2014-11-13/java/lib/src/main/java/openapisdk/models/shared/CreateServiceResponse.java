package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateServiceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public Service service;
    public CreateServiceResponse withService(Service service) {
        this.service = service;
        return this;
    }
}