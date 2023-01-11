package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLocationResponse {
    @JsonProperty("data")
    public Location data;
    public GetLocationResponse withData(Location data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetLocationResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetLocationResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetLocationResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetLocationResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}