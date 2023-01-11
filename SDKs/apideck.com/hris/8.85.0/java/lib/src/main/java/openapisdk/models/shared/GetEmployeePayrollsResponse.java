package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEmployeePayrollsResponse {
    @JsonProperty("data")
    public EmployeePayrolls data;
    public GetEmployeePayrollsResponse withData(EmployeePayrolls data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetEmployeePayrollsResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetEmployeePayrollsResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetEmployeePayrollsResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetEmployeePayrollsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetEmployeePayrollsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}