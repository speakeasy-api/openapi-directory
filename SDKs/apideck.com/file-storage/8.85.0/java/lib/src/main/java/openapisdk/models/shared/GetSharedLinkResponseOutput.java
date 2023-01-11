package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSharedLinkResponseOutput {
    @JsonProperty("data")
    public SharedLinkOutput data;
    public GetSharedLinkResponseOutput withData(SharedLinkOutput data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetSharedLinkResponseOutput withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetSharedLinkResponseOutput withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetSharedLinkResponseOutput withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetSharedLinkResponseOutput withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetSharedLinkResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}