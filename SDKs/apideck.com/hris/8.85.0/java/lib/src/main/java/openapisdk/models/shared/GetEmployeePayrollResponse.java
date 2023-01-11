package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEmployeePayrollResponse {
    @JsonProperty("data")
    public EmployeePayroll data;
    public GetEmployeePayrollResponse withData(EmployeePayroll data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetEmployeePayrollResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetEmployeePayrollResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetEmployeePayrollResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetEmployeePayrollResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetEmployeePayrollResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}