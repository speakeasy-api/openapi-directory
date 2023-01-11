package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetActivityResponse {
    @JsonProperty("data")
    public Activity data;
    public GetActivityResponse withData(Activity data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetActivityResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetActivityResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetActivityResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetActivityResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}