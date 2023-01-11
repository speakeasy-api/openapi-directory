package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateMerchantResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateMerchantResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateMerchantResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateMerchantResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateMerchantResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateMerchantResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateMerchantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}