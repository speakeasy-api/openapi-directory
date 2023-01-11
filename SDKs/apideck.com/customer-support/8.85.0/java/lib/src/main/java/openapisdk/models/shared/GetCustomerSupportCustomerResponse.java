package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCustomerSupportCustomerResponse {
    @JsonProperty("data")
    public CustomerSupportCustomer data;
    public GetCustomerSupportCustomerResponse withData(CustomerSupportCustomer data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetCustomerSupportCustomerResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetCustomerSupportCustomerResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetCustomerSupportCustomerResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetCustomerSupportCustomerResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetCustomerSupportCustomerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}