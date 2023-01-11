package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTimeOffRequestResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateTimeOffRequestResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateTimeOffRequestResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateTimeOffRequestResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateTimeOffRequestResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateTimeOffRequestResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateTimeOffRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}