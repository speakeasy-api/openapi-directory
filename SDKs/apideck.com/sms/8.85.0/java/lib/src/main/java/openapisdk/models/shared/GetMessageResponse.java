package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetMessageResponse {
    @JsonProperty("data")
    public Message data;
    public GetMessageResponse withData(Message data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetMessageResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetMessageResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetMessageResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetMessageResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}