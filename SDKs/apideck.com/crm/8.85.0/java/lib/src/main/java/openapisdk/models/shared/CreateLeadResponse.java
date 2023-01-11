package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateLeadResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateLeadResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateLeadResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateLeadResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateLeadResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateLeadResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateLeadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}