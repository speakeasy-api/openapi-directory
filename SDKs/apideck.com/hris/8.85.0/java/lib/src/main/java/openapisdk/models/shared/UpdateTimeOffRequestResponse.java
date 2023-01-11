package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTimeOffRequestResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public UpdateTimeOffRequestResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public UpdateTimeOffRequestResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public UpdateTimeOffRequestResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public UpdateTimeOffRequestResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public UpdateTimeOffRequestResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public UpdateTimeOffRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}