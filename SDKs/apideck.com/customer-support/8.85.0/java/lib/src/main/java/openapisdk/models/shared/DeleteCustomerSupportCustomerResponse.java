package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCustomerSupportCustomerResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public DeleteCustomerSupportCustomerResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public DeleteCustomerSupportCustomerResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public DeleteCustomerSupportCustomerResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public DeleteCustomerSupportCustomerResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public DeleteCustomerSupportCustomerResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public DeleteCustomerSupportCustomerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}