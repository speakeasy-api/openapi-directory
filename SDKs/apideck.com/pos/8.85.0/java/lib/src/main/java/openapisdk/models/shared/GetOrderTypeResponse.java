package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetOrderTypeResponse {
    @JsonProperty("data")
    public OrderType data;
    public GetOrderTypeResponse withData(OrderType data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetOrderTypeResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetOrderTypeResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetOrderTypeResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetOrderTypeResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetOrderTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}