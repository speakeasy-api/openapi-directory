package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDriveResponse {
    @JsonProperty("data")
    public Drive data;
    public GetDriveResponse withData(Drive data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetDriveResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetDriveResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetDriveResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetDriveResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetDriveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}