package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLeadResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public DeleteLeadResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public DeleteLeadResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public DeleteLeadResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public DeleteLeadResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public DeleteLeadResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public DeleteLeadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}