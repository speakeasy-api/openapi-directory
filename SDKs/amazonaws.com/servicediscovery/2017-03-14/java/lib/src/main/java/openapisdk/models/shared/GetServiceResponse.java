package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServiceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public Service service;
    public GetServiceResponse withService(Service service) {
        this.service = service;
        return this;
    }
}