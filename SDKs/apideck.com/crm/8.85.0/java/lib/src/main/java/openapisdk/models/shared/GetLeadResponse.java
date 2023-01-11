package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLeadResponse {
    @JsonProperty("data")
    public Lead data;
    public GetLeadResponse withData(Lead data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetLeadResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetLeadResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetLeadResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetLeadResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetLeadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}