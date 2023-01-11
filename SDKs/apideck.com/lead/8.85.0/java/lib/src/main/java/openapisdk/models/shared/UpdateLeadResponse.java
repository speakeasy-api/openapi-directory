package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateLeadResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public UpdateLeadResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public UpdateLeadResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public UpdateLeadResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public UpdateLeadResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public UpdateLeadResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public UpdateLeadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}