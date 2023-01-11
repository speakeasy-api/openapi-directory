package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCustomerSupportCustomerResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateCustomerSupportCustomerResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateCustomerSupportCustomerResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateCustomerSupportCustomerResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateCustomerSupportCustomerResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateCustomerSupportCustomerResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateCustomerSupportCustomerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}