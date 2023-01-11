package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateItemResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateItemResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateItemResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateItemResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateItemResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateItemResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}