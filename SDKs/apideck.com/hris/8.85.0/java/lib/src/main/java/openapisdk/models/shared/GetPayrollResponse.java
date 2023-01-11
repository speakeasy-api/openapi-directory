package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPayrollResponse {
    @JsonProperty("data")
    public Payroll data;
    public GetPayrollResponse withData(Payroll data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetPayrollResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetPayrollResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetPayrollResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetPayrollResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetPayrollResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}