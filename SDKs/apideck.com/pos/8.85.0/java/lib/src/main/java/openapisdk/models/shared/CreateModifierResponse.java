package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateModifierResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateModifierResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateModifierResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateModifierResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateModifierResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateModifierResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateModifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}