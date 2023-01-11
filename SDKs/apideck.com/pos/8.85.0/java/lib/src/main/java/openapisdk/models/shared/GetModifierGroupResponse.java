package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetModifierGroupResponse {
    @JsonProperty("data")
    public ModifierGroup data;
    public GetModifierGroupResponse withData(ModifierGroup data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetModifierGroupResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetModifierGroupResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetModifierGroupResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetModifierGroupResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetModifierGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}