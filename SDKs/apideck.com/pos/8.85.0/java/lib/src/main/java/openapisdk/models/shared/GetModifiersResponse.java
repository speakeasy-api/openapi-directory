package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetModifiersResponse {
    @JsonProperty("data")
    public Modifier[] data;
    public GetModifiersResponse withData(Modifier[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public GetModifiersResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public GetModifiersResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetModifiersResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetModifiersResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetModifiersResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetModifiersResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetModifiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}