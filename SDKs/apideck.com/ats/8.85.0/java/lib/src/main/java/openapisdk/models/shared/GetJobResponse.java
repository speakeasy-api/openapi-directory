package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJobResponse {
    @JsonProperty("data")
    public Job data;
    public GetJobResponse withData(Job data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetJobResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetJobResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetJobResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetJobResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}