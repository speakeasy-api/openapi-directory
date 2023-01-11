package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSharedLinkResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateSharedLinkResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateSharedLinkResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateSharedLinkResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateSharedLinkResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateSharedLinkResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateSharedLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}