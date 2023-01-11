package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetHrisJobsResponse {
    @JsonProperty("data")
    public HrisJobs data;
    public GetHrisJobsResponse withData(HrisJobs data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetHrisJobsResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetHrisJobsResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetHrisJobsResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetHrisJobsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetHrisJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}