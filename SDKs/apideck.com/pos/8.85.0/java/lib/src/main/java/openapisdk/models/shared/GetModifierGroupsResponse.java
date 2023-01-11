package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetModifierGroupsResponse {
    @JsonProperty("data")
    public ModifierGroup[] data;
    public GetModifierGroupsResponse withData(ModifierGroup[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public GetModifierGroupsResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public GetModifierGroupsResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetModifierGroupsResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetModifierGroupsResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetModifierGroupsResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetModifierGroupsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetModifierGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}