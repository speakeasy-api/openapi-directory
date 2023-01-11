package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEmployeeSchedulesResponse {
    @JsonProperty("data")
    public EmployeeSchedules data;
    public GetEmployeeSchedulesResponse withData(EmployeeSchedules data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetEmployeeSchedulesResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetEmployeeSchedulesResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetEmployeeSchedulesResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetEmployeeSchedulesResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetEmployeeSchedulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}