package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetHrisJobResponse {
    @JsonProperty("data")
    public HrisJob data;
    public GetHrisJobResponse withData(HrisJob data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetHrisJobResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetHrisJobResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetHrisJobResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetHrisJobResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetHrisJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}