package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPosPaymentResponse {
    @JsonProperty("data")
    public PosPayment data;
    public GetPosPaymentResponse withData(PosPayment data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetPosPaymentResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetPosPaymentResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetPosPaymentResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetPosPaymentResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetPosPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}