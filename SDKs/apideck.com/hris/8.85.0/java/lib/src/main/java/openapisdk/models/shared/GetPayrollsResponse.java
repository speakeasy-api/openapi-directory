package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPayrollsResponse {
    @JsonProperty("data")
    public Payroll[] data;
    public GetPayrollsResponse withData(Payroll[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetPayrollsResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetPayrollsResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetPayrollsResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetPayrollsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetPayrollsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}