package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSharedLinkResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public UpdateSharedLinkResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public UpdateSharedLinkResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public UpdateSharedLinkResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public UpdateSharedLinkResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public UpdateSharedLinkResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public UpdateSharedLinkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}