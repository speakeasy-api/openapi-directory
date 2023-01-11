package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetModifierResponse {
    @JsonProperty("data")
    public Modifier data;
    public GetModifierResponse withData(Modifier data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetModifierResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetModifierResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetModifierResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetModifierResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetModifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}