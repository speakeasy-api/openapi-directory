package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetOrderResponse {
    @JsonProperty("data")
    public Order data;
    public GetOrderResponse withData(Order data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetOrderResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetOrderResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetOrderResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetOrderResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}