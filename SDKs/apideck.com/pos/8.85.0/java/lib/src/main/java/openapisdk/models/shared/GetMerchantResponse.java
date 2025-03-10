package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMerchantResponse {
    @JsonProperty("data")
    public Merchant data;
    public GetMerchantResponse withData(Merchant data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetMerchantResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetMerchantResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetMerchantResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetMerchantResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetMerchantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}