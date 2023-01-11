package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFileResponse {
    @JsonProperty("data")
    public UnifiedFile data;
    public GetFileResponse withData(UnifiedFile data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetFileResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetFileResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetFileResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetFileResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}