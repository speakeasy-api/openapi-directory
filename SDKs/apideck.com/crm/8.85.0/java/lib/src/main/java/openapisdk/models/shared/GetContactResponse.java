package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetContactResponse {
    @JsonProperty("data")
    public Contact data;
    public GetContactResponse withData(Contact data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetContactResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetContactResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetContactResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetContactResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}