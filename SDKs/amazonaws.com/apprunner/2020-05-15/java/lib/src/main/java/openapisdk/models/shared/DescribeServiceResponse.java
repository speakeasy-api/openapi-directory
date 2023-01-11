package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeServiceResponse {
    @JsonProperty("Service")
    public Service service;
    public DescribeServiceResponse withService(Service service) {
        this.service = service;
        return this;
    }
}