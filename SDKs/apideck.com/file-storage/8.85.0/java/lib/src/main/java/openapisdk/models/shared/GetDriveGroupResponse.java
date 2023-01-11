package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDriveGroupResponse {
    @JsonProperty("data")
    public DriveGroup data;
    public GetDriveGroupResponse withData(DriveGroup data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetDriveGroupResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetDriveGroupResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetDriveGroupResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetDriveGroupResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetDriveGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}