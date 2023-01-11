package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTimeOffRequestResponse {
    @JsonProperty("data")
    public TimeOffRequest data;
    public GetTimeOffRequestResponse withData(TimeOffRequest data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetTimeOffRequestResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetTimeOffRequestResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetTimeOffRequestResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetTimeOffRequestResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetTimeOffRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}