package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrderTypeResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public UpdateOrderTypeResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public UpdateOrderTypeResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public UpdateOrderTypeResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public UpdateOrderTypeResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public UpdateOrderTypeResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public UpdateOrderTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}