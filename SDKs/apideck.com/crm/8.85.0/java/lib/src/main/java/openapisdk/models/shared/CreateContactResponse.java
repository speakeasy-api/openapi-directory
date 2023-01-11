package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateContactResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateContactResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateContactResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateContactResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateContactResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateContactResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}