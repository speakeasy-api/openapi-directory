package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrderResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public UpdateOrderResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public UpdateOrderResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public UpdateOrderResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public UpdateOrderResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public UpdateOrderResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public UpdateOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}